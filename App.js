import React from 'react';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/Screens/IndexScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/Context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOption: {
      title: 'Blogs',
      headerTitleAlign: 'center',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

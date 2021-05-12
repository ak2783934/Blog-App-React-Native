import React, { useReducer } from 'react';
import { Text } from 'react-native';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.provider value={{ state: state, ...boundActions }}>
        {children}
      </Context.provider>
    );
  };

  return { Context, Provider };
};

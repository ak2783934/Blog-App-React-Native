import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { Context } from '../Context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function IndexScreen({ navigation }) {
  const { state, deleteBlogPost } = useContext(Context);

  IndexScreen.navigationOptions = () => {
    return {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather name='plus' size={30} />
        </TouchableOpacity>
      ),
    };
  };

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Show', { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title}-{item.id}
              </Text>

              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name='trash-2' style={styles.icon} color='black' />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name='plus' size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;

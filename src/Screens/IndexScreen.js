import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { Context } from '../Context/BlogContext';

function IndexScreen() {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Text>Index Screen!</Text>
      <Button
        title='Add post'
        onPress={() => {
          addBlogPost();
        }}
      />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

export default IndexScreen;

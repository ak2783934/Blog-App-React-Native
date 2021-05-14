import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';

function EditScreen({ navigation }) {
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  );

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) =>
        editBlogPost(blogPost.id, title, content, () => {
          return navigation.pop();
        })
      }
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    padding: 5,
    marginBottom: 10,
  },
  label: {
    marginLeft: 5,
    fontSize: 20,
    marginBottom: 10,
  },
});

export default EditScreen;

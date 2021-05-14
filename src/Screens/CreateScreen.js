import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';

function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate('Index');
        });
      }}
    />
  );
}

const styles = StyleSheet.create({});

export default CreateScreen;

import React, { useContext, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Context } from "../Context/BlogContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";

function ShowScreen({ navigation }) {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");

  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    margin: 5,
  },
  content: {
    fontSize: 15,
    borderColor: "blue",
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
    margin: 2,
  },
});

export default ShowScreen;

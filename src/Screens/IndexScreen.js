import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Context } from "../Context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function IndexScreen({ navigation }) {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts();
    });
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Show", {
                  id: item.id,
                  title: item.title,
                  content: item.content,
                })
              }
            >
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Feather name="trash-2" style={styles.icon} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderColor: "black",
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

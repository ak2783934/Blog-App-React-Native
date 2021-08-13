import React, { useContext } from "react";
import { Context } from "../Context/BlogContext";
import BlogPostForm from "../Components/BlogPostForm";

function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate("Index");
        });
      }}
    />
  );
}

export default CreateScreen;

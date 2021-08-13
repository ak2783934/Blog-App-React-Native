import React, { useContext } from "react";
import { Context } from "../Context/BlogContext";
import BlogPostForm from "../Components/BlogPostForm";

function EditScreen({ navigation }) {
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
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

export default EditScreen;

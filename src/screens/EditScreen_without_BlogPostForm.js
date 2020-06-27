import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../Components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  return <BlogPostForm />;
    
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
    // Passing the "id" got from navigation, to "state" which contains all the blogs from Context and select the blog post required
  );

  // #1 : [START] Will not be required as objects will be imported from "BlogPostForm.js" 
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      {/*<Text>Edit Screen - {navigation.getParam("id")}</Text>*/}
      <Text>Edit Title:</Text>
      <TextInput value={title} onChangeText ={(newTitle) => setTitle(newTitle) } />
      <Text>Edit Content:</Text>
      <TextInput value={content} onChangeText ={(newContent) => setTitle(newContent) } />      
    </View>
  );
};
// #1 : [END] Will not be required as objects will be imported from "BlogPostForm.js" 

const styles = StyleSheet.create({});

export default EditScreen;

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  /***
   * Here, context is not imported, thus remains at "CreateScreen" & "EditScreen"
   * Instead, along with "BlogPostForm" object in those files, passes a function as a prop i.e. "onSubmit" & "initialValues"
   * "onSubmit" is a function at initiated form, which executes context based functions i.e. "addBlogPost" at "BlogPostForm"
   */

  const [title, seTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => seTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save Blog Post"
        onPress={() => {
          console.log("BlogPostForm: Save Blog Post");
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

/**
 * React is going to refer to "defaultProps" if its props i.e. "initialValues" or "onSubmit"
 * Functionality more like default constructor in a Java Class
 * Here only "initialValues" is overridden, not for "onSubmit". Hence would trigger an error, if null "onSubmit" is passed
 */
BlogPostForm.defaultProps = {
    initialValues: {
      title: '',
      content: ''
    }
  };

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 5,
  },
});

export default BlogPostForm;

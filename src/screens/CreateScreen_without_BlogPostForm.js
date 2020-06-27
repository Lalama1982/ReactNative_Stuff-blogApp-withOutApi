import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {

  // #1 : Moved to "BlogPostForm.js" 
  const [title, seTitle] = useState("");
  const [content, setContent] = useState("");
  // #1 : Moved to "BlogPostForm.js"
  
  const { addBlogPost } = useContext(Context);
  /*
   * "state" variable actually holds the dataset of blog posts like holding it for the session.
   * hence import of "Context" instance from "BlogContext.js" with all blog posts
   */

  // #2 : Moved to "BlogPostForm.js" 
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
        title="Add Blog Post"
        onPress={() => {
          console.log('CreateScreen: Add Blog Post');
          addBlogPost(title, content, () => {
            navigation.navigate('Index');  // By doing this, navigation will only happen, once the "addBlogPost" is successful
          });
          //navigation.navigate('Index');
        }}
      />
    </View>
  );
};
// #2 : Moved to "BlogPostForm.js"

const styles = StyleSheet.create({
  // #3 : Moved to "BlogPostForm.js" 
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
  // #3 : Moved to "BlogPostForm.js"
});

export default CreateScreen;

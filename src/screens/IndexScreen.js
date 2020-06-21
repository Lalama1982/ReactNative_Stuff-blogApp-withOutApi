import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  /*//Example of receiving: const valueFromBlogContext = useContext(BlogContext); // fetching the value set at "BlogContex.js" of "provider"*/
  const blogPosts = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      {/* Example: <Text>{valueFromBlogContext}</Text>*/}
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;

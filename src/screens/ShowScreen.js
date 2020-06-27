import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons"; // In reference to "expo.github.io/vector-icons"

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  /*
   * "state" variable actually holds the dataset of blog posts like holding it for the session.
   * hence import of "Context" instance from "BlogContext.js" with all blog posts
   */

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  // "id" is passed from "IndexScreen" as a "item.id" via a "navigation" prop

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

// Setting the Header of the Page
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          console.log("ShowScreen: pencil icon clicked");
          navigation.navigate("Edit", {id: navigation.getParam('id')}); {/* Passing the "id" to "EditScreen" */}
        }}
      >
        <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
    paddingRight: 9,
  },
});

export default ShowScreen;

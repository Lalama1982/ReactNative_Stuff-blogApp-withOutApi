import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";
/**
 * "BlogProvider" is imported using curly brackets as at "BlogContext.js", does not export default but "const" variable.
 */

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

//export default createAppContainer(navigator); [INFO] In order to wrap the navigator, assigned to a variable "App"
const App = createAppContainer(navigator);

export default () => {
  return (
    // Rather than returning the "App", it is enclosed inside the "BlogProvider"
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};

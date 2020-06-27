import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext";
/**
 * "BlogProvider" is imported using curly brackets as at "BlogContext.js", does not export default but "const" variable.
 */
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
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

import createDataContext from "./createDataContext";
import { call } from "react-native-reanimated";

//const BlogContext = React.createContext(); // Context is imported from "createDataContext.js"

/*
 *"state" variable actually holds the dataset of blog posts like holding it for the session.
 *hence every page/js object, import an instance of context of the "BlogContext.js"
 */

const blogReducer = (state, action) => {
  switch (action.type) {
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
        /*
        * Below is similar to ternary function above.
        * This traverse through all the blogposts of "state", one matched will return.
        * It will be "saved" into the 'State' context
        * 
        if (blogPost.id === action.payload.id ){
          return action.payload;
        } else {
          return blogPost;
        }
        */
      });
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    /*
      It is not deleting a specfic "blog post", but except for the specified rest are populated to "state" variable
      */
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999), // To uniquely identify a blog post
          title: action.payload.title, //`Blog Post(via Reducer) #${state.length + 1}`,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id }); // "payload" & "type" are not keywords. "payload" = id of the blogpost
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "Default Title", content: "Default Content", id: "1" }]
  /**
   * This will set the "state" variable with default attributes
   * In this case at "IndexScreen" for "state", they will be shown at initiation
   */
);

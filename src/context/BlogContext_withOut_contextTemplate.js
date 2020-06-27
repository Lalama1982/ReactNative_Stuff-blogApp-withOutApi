import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post(via Reducer) #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  //const blogPosts = [{ title: "Blog Post#1" }, { title: "Blog Post#2" }]; // This is replaced by "useState"
  const [blogPostsState, blogPostDispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    blogPostDispatch({ type: "add_blogpost" });
  };

  /* // Example: return <BlogContext.Provider value={'Value set & passed from BlogContext of Provider'}>{children}</BlogContext.Provider>;
    // This "value" is what been referred at "IndexScreen.js" as "const { data, addBlogPost } = useContext(BlogContext);"
  */
  return (
    <BlogContext.Provider value={{ data: blogPostsState, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

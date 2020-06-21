import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [{ title: "Blog Post#1" }, { title: "Blog Post#2" }];
  /* // Example: return <BlogContext.Provider value={'Value set & passed from BlogContext of Provider'}>{children}</BlogContext.Provider>; */
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;

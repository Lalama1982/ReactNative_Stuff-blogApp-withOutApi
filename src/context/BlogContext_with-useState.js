import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  //const blogPosts = [{ title: "Blog Post#1" }, { title: "Blog Post#2" }]; // This is replaced by "useState"
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([ // invoking the setter "setBlogPosts", 
      ...blogPosts, // "..." amends to array "blogPosts"
      { title: `Blog Post#${blogPosts.length + 1}` },
    ]);
  };

  /* // Example: return <BlogContext.Provider value={'Value set & passed from BlogContext of Provider'}>{children}</BlogContext.Provider>; */
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

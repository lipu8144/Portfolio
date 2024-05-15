import React from "react";
import Bounded from "../components/Bounded";
import ContentList from "../components/ContentList";
import { Outlet } from "react-router-dom";
import { BlogData } from "../db/db";

const Blog = () => {
  document.title = "Lipu Swain | Blogs"

  //get blog data from backend and send to contentList
  

  return (
    <Bounded>
      <h1 className="mb-8 md:text-9xl text-7xl font-extrabold">Blog</h1>
      <div className="prose prose-xl prose-invert mb-10">
        I write about what I've learned so other can benefit
      </div>
      <ContentList data={BlogData} readMore={"Read More"} page={"blog"} />
    </Bounded>
  );
};

export default Blog;

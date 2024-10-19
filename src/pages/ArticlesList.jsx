import React from "react";
import ArticleContent from "./ArticleContent"; // Ensure this is an array

import ReuseArtilce from "../components/ReuseArtilce";
export default function ArticlesList() {
  return (
    <div>
      <h1 className="mt-10">All Articles</h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <ReuseArtilce articles={ArticleContent}/>
        </div>
      </div>
      <p>other articles</p>
    </div>
  );
}

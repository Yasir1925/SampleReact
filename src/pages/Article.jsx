import React from "react";
import './Article.css'
import ArticleContent from "./ArticleContent";
import { useParams } from "react-router";
import ReuseArtilce from "../components/ReuseArtilce";
export default function Article() {
  const { name } = useParams();
  const article = ArticleContent.find((article) => article.name === name);
  if (!article) {
    return (
      <div>
        <p className="mt-11 text-center">{name} page not found</p>
      </div>
    );
  }
  const other=ArticleContent.filter(article=>article.name!==name)
  return (
    <div className="mt-11">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nostrum
      eveniet minima animi rerum impedit. Cupiditate corrupti iste commodi
      consectetur, odit alias eligendi modi at accusantium quis excepturi quod
      temporibus.
      <h1>{article.title}</h1>
      {article.content.map((para, index) => (
        <p key={index}>{para} </p>
      ))}
      <p className="other">Other Artices</p>
     <div className="otherArticles">
     <ReuseArtilce articles={other}/>
     </div>
 
    </div>
  );
}

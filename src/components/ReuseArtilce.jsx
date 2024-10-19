import React from 'react'
import { Link } from "react-router-dom";
import ArticlesList from '../pages/ArticlesList';
const ReuseArtilce = ({articles}) => {
  return (
    <>

{articles.map((art, ind) => (
            <div key={ind} className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Link to={`/article/${art.name}`}>
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover"
                    src={art.thumbnail} // Use curly braces to insert the variable
                    alt="blog"
                  />
                    <p> {art.name}</p>
                </Link>
              
              </div>
            </div>
          ))}

          <p>Other Articles</p>
    </>
  )
}

export default ReuseArtilce
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className=" nav border-b-4 border-green-700 text-center fixed top-0 bg-green-600 font-bold w-full text-lg text-white">
      <ul className="ul">
        <li>
          <Link to="/" className="pl-6 pr-8 li">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="pl-6 pr-8 li">
            About
          </Link>
        </li>
        <li>
          <Link to="/article" className="pl-6 pr-8 li">
            Article
          </Link>
        </li>
        <li>
          <Link to="/articles" className="pl-6 pr-8 li">
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    id="searchBoxTop"
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

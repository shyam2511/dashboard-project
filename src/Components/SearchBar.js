// SearchBar.js
import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
function SearchBar({setResults}) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchFormRef = useRef(null);
  
  const fetchData = (value) => {
    axios
      .get(
        `https://coders-dashboard-4cdb4394fb85.herokuapp.com/auth/search-users?query=${value}`
      )
      .then((response) => {
        value && setResults(response.data);
      })
      .catch((error) => {
        setResults([]);
        console.error("Error fetching data:", error);
      });
  };

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleInputChange = (value) => {
    setSearchText(value);
    value && fetchData(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchText);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchFormRef.current &&
        !searchFormRef.current.contains(event.target)
      ) {
        setIsSearching(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchFormRef]);

  return (
    <div className="search-bar">
      {isSearching ? (
        <form
          onSubmit={handleSearchSubmit}
          className="search-form"
          ref={searchFormRef}
        >
          <input
            type="text"
            placeholder="Enter the name of user"
            value={searchText}
            onChange={(e)=>{handleInputChange(e.target.value)}}
            className="search-input"
          />
        </form>
      ) : (
        <div className="header-option" onClick={handleSearchClick}>
          <BsSearch className="icon" />
          <span>Search Users</span>
        </div>
      )}
    </div>
  );
}

export default SearchBar;

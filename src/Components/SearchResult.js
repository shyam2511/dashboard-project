import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ result,setResults }) => {
  const navigate = useNavigate();
  return (
    <div
      className="search-res"
      onClick={() => {
        setResults([]);
        navigate(`/search/${result._id}`);
      }}
    >
      {result.name}
    </div>
  );
};

export default SearchResult;

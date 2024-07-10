import React from "react";
import SearchResult from "./SearchResult";

const SearchResultsList = ({ results, setResults }) => {
  return (
    <div className="search-res-container">
      {results.map((result, id) => {
        return (
          <SearchResult result={result} key={id} setResults={setResults} />
        );
      })}
    </div>
  );
};

export default SearchResultsList;

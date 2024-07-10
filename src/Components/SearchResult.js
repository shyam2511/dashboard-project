import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchResult = ({result}) => {
    const navigate= useNavigate();
  return (
    <div onClick={()=>{navigate(`/search/${result._id}`)}}>
      {result.name}
    </div>
  )
}

export default SearchResult

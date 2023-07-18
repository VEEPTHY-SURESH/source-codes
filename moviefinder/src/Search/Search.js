import React, { useState } from "react";
import "./style.css"


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input
            name="text"
            className="input"
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="text"
            placeholder="enter movie name"
          />
        <button className="Btn" onClick={callSearchFunction} type="submit" >Search</button>
      </form>
    );
}

export default Search;
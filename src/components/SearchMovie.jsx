import React, { useRef } from "react";

import "./SearchMovies.css";

const SearchMovie = (props) => {
  const titleRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = titleRef.current.value;

    props.onSearchMovie(movie);
  }
  return (
    <div className={"search__container"}>
      <h1>Search for your favorite movie </h1>
      <form onSubmit={submitHandler}>
        <input type="text" ref={titleRef} />

        <button className="btn btn-primary">Search</button>
      </form>
    </div>
  );
};

export default SearchMovie;

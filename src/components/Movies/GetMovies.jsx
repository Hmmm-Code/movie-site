import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowManga from "../Movies/ShowMovies";

const GetMovies = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getManga = async () => {
      const movies = await axios.get(
        `https://fake-movie-database-api.herokuapp.com/api?s=batman`
      );
      const moviesData = await movies.data.Search;
      setMovies(moviesData);
    };

    getManga();
    setLoading(false);
    console.log(movies);
  }, [movies]);
  return loading ? (
    "Loading"
  ) : (
    <>
      <div className="movies">
        <h3 className="title">What's Popular</h3>
        <button className="btn btn--primary">Batman Movies</button>
        <button className="btn btn--primary">Star Wars Movies</button>
      </div>
      <div className="container">
        {movies.map((data) => (
          <ShowManga data={data} />
        ))}
      </div>
    </>
  );
};

export default GetMovies;

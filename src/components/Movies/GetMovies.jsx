import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowManga from "../Movies/ShowMovies";

const GetMovies = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `https://fake-movie-database-api.herokuapp.com/api?s=batman`
      );
      const moviesData = await movies.data.Search;
      setMovies(moviesData);
      setLoading(false);
    };

    getMovies();
  }, [movies]);
  return loading ? (
    "Loading"
  ) : (
    <>
      <section className="movies">
        <div className="movie--wraper">
          <div className="movie--content">
            <div className="movie--column">
              <div className="header">
                <h3 className="title">What's Popular</h3>
                <button className="btn btn--primary">Batman Movies</button>
                <button className="btn btn--primary">Star Wars Movies</button>
              </div>
              <div className="container">
                <div className="movie--container">
                  {movies.map((data) => (
                    <ShowManga data={data} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetMovies;

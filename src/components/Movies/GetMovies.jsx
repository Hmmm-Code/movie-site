import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowManga from "../Movies/ShowMovies";
import BottomNavigation from "../navigation/BottomNavigation";

const GetMovies = () => {
  const [allMovies, setAllMovies] = useState();
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  let [increament, setIncreament] = useState(30);
  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json`
      );
      const moviesData = await movies.data.data;
      const movieData = moviesData.slice(0, 18);
      setAllMovies(moviesData);

      setMovies(movieData);
      setLoading(false);
    };

    getMovies();
  }, []);

  const handleMore = () => {
    const loadMore = allMovies.slice(0, increament);
    setIncreament(increament + 12);
    setMovies(loadMore);
  };

  return loading ? (
    "Loading"
  ) : (
    // Loading component
    <>
      <section className="movies">
        <div className="movie--wraper">
          <div className="movie--content">
            <div className="movie--column">
              <div className="header">
                <h3 className="title">What's Popular</h3>
              </div>
              <div className="container">
                <div className="inline--container">
                  <div className="movie--container">
                    {movies.map((data) => (
                      <ShowManga data={data} />
                    ))}
                  </div>
                </div>
              </div>
              <BottomNavigation handleMore={handleMore} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetMovies;

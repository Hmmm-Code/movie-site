import React from "react";
import GetMovies from "./Movies/GetMovies";

import NavigationBar from "./navigation/NavigationBar";
const Home = () => {
  return (
    <div>
      <NavigationBar />
      <GetMovies />
    </div>
  );
};

export default Home;

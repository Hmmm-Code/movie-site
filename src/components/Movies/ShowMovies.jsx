import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function ShowMovies({ data }) {
  const { Poster, Title, Year } = data;
  return (
    <div className="movie--card">
      <div className="image">
        <div className="image--wraper">
          <img className="movie--img" src={Poster} alt="movie poster" />
        </div>
      </div>
      <div className="movie__content">
        <div className="rating">
          <div className="movie--rating">
            <div className="movie--score">
              <div className="user--rating">
                <Rating value={75} />
              </div>
            </div>
          </div>
        </div>
        <h2 className="movie--title">
          <Link to="./">{Title}</Link>
        </h2>

        <div className="movie--date">{Year}</div>
      </div>
    </div>
  );
}

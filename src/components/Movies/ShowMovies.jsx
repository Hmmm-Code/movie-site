import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function ShowMovies({ data }) {
  const { poster, title, crawled_at } = data;
  const releaseDate = crawled_at.slice(0, 10);

  return (
    <div className="movie--card">
      <div className="image">
        <div className="image--wraper">
          <img className="movie--img" src={poster} alt="movie poster" />
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
          <Link to="./">{title}</Link>
        </h2>

        <div className="movie--date">{releaseDate}</div>
      </div>
    </div>
  );
}

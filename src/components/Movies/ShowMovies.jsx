import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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
        <div className="movie--title">{Title}</div>
        <div className="movie--date">Release data: {Year}</div>
      </div>
    </div>
  );
}

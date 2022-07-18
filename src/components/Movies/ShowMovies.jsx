import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ShowMovies({ data }) {
  const data1 = data.Search;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data1.Poster}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data1.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Release data: {data1.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

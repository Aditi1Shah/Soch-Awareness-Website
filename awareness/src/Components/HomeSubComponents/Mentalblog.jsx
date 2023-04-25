import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Mentalblog() {
  const navigate = useNavigate();
  const handlebuttonclick = (e) => {
    let path = "/post/6448349c00b0303090bc7e1a";
    navigate(path);
    e.preventDefault();
  };
  return (
    <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft: 5 }}>
      <CardMedia
        sx={{ height: 256 }}
        image="https://s3.envato.com/files/239866139/IMG_9420.jpg"
        title="Mnetal Health"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rohan's Story
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rohan struggled with peer pressure and suicidal thoughts from years.
          SOCH helped him get out of his trauma.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handlebuttonclick}>
          Learn More
        </Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

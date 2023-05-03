import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Anger() {
  const navigate = useNavigate();
  const handlebuttonclick = (e) => {
    let path = "/angerpage";
    navigate(path);
    e.preventDefault();
  };
  return (
    <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft: 5 }}>
      <CardMedia
        sx={{ height: 256 }}
        image="https://cdn5.vectorstock.com/i/1000x1000/32/14/cute-cartoon-angry-girl-character-vector-14673214.jpg"
        title="Anger"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Anger
        </Typography>
        <Typography variant="body2" color="text.secondary">
          There are some Gita Shlokas to help with Anger. There are stories of
          Mahabharata which help you overcome your problems with similar
          instances
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

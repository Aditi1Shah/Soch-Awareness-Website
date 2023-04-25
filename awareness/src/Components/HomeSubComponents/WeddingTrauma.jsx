import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function WeddingTrauma() {
  const navigate = useNavigate();
  const handlebuttonclick = (e) => {
    let path = "post/64483eaa00b0303090bc7e2f";
    navigate(path);
    e.preventDefault();
  };
  return (
    <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft: 5 }}>
      <CardMedia
        sx={{ height: 256 }}
        image="https://thumbs.dreamstime.com/b/diamond-wedding-ring-given-groom-to-bride-asian-malay-ceremony-62582675.jpg"
        title="Wedding"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mishka's Story
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mishka was struggling to come out of a relationship.Read on to find
          how Mishka pvercamed an abusive marriage.
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

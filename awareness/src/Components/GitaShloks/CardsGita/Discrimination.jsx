import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Discrimination() {
  const navigate = useNavigate();
  const handlebuttonclick = (e) => {
    let path = "/discriminationdpage";
    navigate(path);
    e.preventDefault();
  };
  return (
    <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft: 5 }}>
      <CardMedia
        sx={{ height: 256 }}
        image="https://media.istockphoto.com/id/1146733836/vector/businessman-and-businesswoman-are-standing-on-stacks-of-coins-representing-wages-level.jpg?s=612x612&w=0&k=20&c=bWuNlCbHnNlMQ5wnHI2Wa7xyKsHbmjvX7t9BAX9APtA="
        title="Discrimination"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Discrimination
        </Typography>
        <Typography variant="body2" color="text.secondary">
          There are some Gita Shlokas to help with discrimination. There are
          stories of Mahabharata which help you overcome your problems with
          similar instances
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

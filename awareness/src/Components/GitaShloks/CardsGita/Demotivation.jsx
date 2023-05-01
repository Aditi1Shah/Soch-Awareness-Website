import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Demotivation() {
  const navigate = useNavigate();
  const handlebuttonclick = (e) => {
    let path = "/demotivatedpage";
    navigate(path);
    e.preventDefault();
  };
  return (
    <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft: 5 }}>
      <CardMedia
        sx={{ height: 256 }}
        image="https://thumbs.dreamstime.com/b/demotivating-office-businessman-employee-cartoon-vector-illustration-154770187.jpg"
        title="Demotivation"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Demotivation
        </Typography>
        <Typography variant="body2" color="text.secondary">
          There are some Gita Shlokas to help with demotivation. There are
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

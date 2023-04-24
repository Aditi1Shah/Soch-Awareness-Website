import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
export default function DrugAddiction() {
  const navigate = useNavigate();
  const handleclick = (e) => {
    let path = "/post/6446f1618d8f18a84fb3318b";
    navigate(path);
    e.preventDefault();
  };
  return (
    <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft: 5 }}>
      <CardMedia
        component="img"
        sx={{ height: 256, objectFit: "contain" }}
        image="https://static.vecteezy.com/system/resources/previews/002/386/779/large_2x/beautiful-asian-woman-sits-on-a-hospital-bed-with-a-smiling-face-free-photo.JPG"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pari's Story
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Pari overcame drug addiction through constant support from her family
          and friends and got a lot of motivation after reading blogs on SOCH
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleclick}>
          Learn More
        </Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

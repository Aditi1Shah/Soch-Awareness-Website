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
    let path = "/deathoflovedpage";
    navigate(path);
    e.preventDefault();
  };
  return (
    <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft: 5 }}>
      <CardMedia
        sx={{ height: 256 }}
        image="data:image/jpeg;base64,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"
        title="Confusion"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Death Of Loved One
        </Typography>
        <Typography variant="body2" color="text.secondary">
          There are some Gita Shlokas to help with greif at times of losing a
          loved one. There are stories of Mahabharata which help you overcome
          your problems with similar instances
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

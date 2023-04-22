import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DrugAddiction({ post }) {
  const PF = "localhost:5000/images/";
  return (
    <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft: 5 }}>
      <CardMedia
        sx={{ height: 256 }}
        image={PF + post.photo}
        title={post.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Gina's Story
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gina overcame drug addiction through constant support from her family
          and friends and got a lot of motivation after reading blogs on SOCH
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Mentalblog() {
  return (
    <Card sx={{ maxWidth: 345, marginTop: 5, marginLeft: 5 }}>
      <CardMedia
        sx={{ height: 256 }}
        image="https://img.freepik.com/free-vector/mental-health-awareness-concept_52683-37916.jpg?w=2000"
        title="Mnetal Health"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mental Health Blogs
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mental Health is important. It affects how we think, feel and act.
          Read on to know more about mental health and many ways to stay
          stressfree.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

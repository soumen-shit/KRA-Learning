"use client";
import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const page = () => {
  return (
    <div className="p-10 flex flex-col gap-5">
      <Card>
        <CardContent>
          <Typography variant="h5">MUI Setup Done</Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            This is a Material UI Card
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="Lizard"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <div>
        <Button variant="contained">MUI Button</Button>
      </div>
    </div>
  );
};

export default page;

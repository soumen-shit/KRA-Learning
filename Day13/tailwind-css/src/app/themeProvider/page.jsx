import { Button, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div className="p-5">
      <Typography variant="h5">Theme Provider Active</Typography>
      <Button variant="contained" sx={{ mt: 2 }}>
        Primary Button
      </Button>
      <Button variant="contained" color="secondary" sx={{ mt: 2, ml: 2 }}>
        Secondary Button
      </Button>
    </div>
  );
};

export default page;

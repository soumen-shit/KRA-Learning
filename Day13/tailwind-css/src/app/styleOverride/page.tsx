import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <Card>
          <CardContent className="flex flex-col gap-4 items-center">
            <Typography variant="h5">Style Overrides</Typography>
            <TextField label="email" />
            <Button variant="contained">Submit</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;

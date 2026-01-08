import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <Card>
          <CardContent className="flex flex-col gap-4">
            <Typography variant="h5" className="text-center">
              Tailwind + MUI
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tailwind handles layout, MUI handles components.
            </Typography>
            <Button variant="contained">Get Started</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;

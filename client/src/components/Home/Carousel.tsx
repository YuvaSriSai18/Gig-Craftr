import React, { useState } from "react";
import { Card, CardContent, Typography, Avatar, Button } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { Box } from "@mui/system";
import {freelancers} from '../../Constants/freelancer.ts'

const VerticalCarousel = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScrollUp = () => {
    setScrollIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleScrollDown = () => {
    setScrollIndex((prevIndex) =>
      prevIndex < Math.ceil(freelancers.length / 3) - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "600px", // Adjust height as needed
        width: "350px",  // Adjust width as needed
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f0f4ff",
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      <Button
        onClick={handleScrollUp}
        variant="contained"
        sx={{ position: "absolute", top: 0, zIndex: 1 }}
      >
        <ArrowUpward />
      </Button>

      <Box
        sx={{
          overflowY: "hidden",
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            transform: `translateY(-${scrollIndex * 100}%)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {freelancers.slice(scrollIndex * 3, scrollIndex * 3 + 3).map((freelancer, index) => (
            <Card
              key={index}
              sx={{
                marginBottom: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {freelancer.title}
                </Typography>
                <Typography variant="body2" sx={{ margin: "10px 0" }}>
                  {freelancer.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {freelancer.time}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: "10px", fontWeight: "bold" }}>
                  Highest Bid {freelancer.bid}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Button
        onClick={handleScrollDown}
        variant="contained"
        sx={{ position: "absolute", bottom: 0, zIndex: 1 }}
      >
        <ArrowDownward />
      </Button>
    </Box>
  );
};

export default VerticalCarousel;

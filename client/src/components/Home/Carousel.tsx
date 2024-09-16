import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import StarIcon from "@mui/icons-material/Star";
import { jobs } from "../../Constants/jobs";

const Carousel: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Scroll amount per button click
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(
              scrollRef.current.scrollWidth - scrollRef.current.offsetWidth,
              scrollPosition + scrollAmount
            );
      setScrollPosition(newPosition);
      scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", maxWidth: "100%",margin:'20px' }}>
      {/* Carousel Content */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          padding:'5px',
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {jobs.map((job, index) => (
          <Card
            key={index}
            sx={{
              minWidth: "260px",
              maxWidth: "260px",
              minHeight: "280px",
              maxHeight: "280px",
              marginRight: "1rem",
              flexShrink: 0,
              boxShadow: 3,
              borderRadius: "10px",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent
              sx={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                height: "100%",
                overflow: "hidden", // Prevent overflow of card content
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {job.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  fontSize: "0.875rem",
                  height: "40px", // Fixed height for descriptions
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {job.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {job.time}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <StarIcon
                  sx={{
                    color: "#ffb400",
                    fontSize: "1.2rem",
                    marginRight: "0.25rem",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.875rem",
                  }}
                >
                  {job.rating}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "auto",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                  }}
                >
                  Highest Bid: {job.bid}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    fontSize: "0.75rem",
                    padding: "5px 10px",
                  }}
                  onClick={() => console.log(`Bid on ${job.title}`)}
                >
                  Bid Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Updated Button Container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "end", // Align both buttons in the center
          gap: "1rem", // Space between the buttons
          marginTop: "1rem", // Margin to separate buttons from the carousel
          marginRight: "2rem"
        }}
      >
        {/* Left Scroll Button */}
        <IconButton
          onClick={() => handleScroll("left")}
          sx={{
            backgroundColor: "#1976d2",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#1565c0",
              transform: "scale(1.1)", // Scale up on hover for effect
            },
            borderRadius: "50%",
            boxShadow: 3,
            transition: "transform 0.2s ease-in-out", // Smooth scaling effect
          }}
        >
          <ArrowBackRoundedIcon />
        </IconButton>

        {/* Right Scroll Button */}
        <IconButton
          onClick={() => handleScroll("right")}
          sx={{
            backgroundColor: "#1976d2",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#1565c0",
              transform: "scale(1.1)", // Scale up on hover for effect
            },
            borderRadius: "50%",
            boxShadow: 3,
            transition: "transform 0.2s ease-in-out", // Smooth scaling effect
          }}
        >
          <ArrowForwardRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Carousel;
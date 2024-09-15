import React, { useState, useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";

const jobs = [
  {
    title: "Graphic&Design",
    description: "Need a Graphic Designer to design a social media platform.",
    time: "10 minutes ago",
    bid: "$300",
    rating: 4.5,
  },
  {
    title: "C++ Developer",
    description:
      "I want a C++ Developer who has strong foundation in data structures.",
    time: "12 minutes ago",
    bid: "$200",
    rating: 3.5,
  },
  {
    title: "React Developer",
    description:
      "Need an experienced Full Stack Developer to build e-commerce website.",
    time: "19 minutes ago",
    bid: "$100",
    rating: 4.0,
  },
  {
    title: "C Developer",
    description:
      "I want a C Developer to help with an embedded system project.",
    time: "20 minutes ago",
    bid: "$500",
    rating: 4.2,
  },
];

const Carousel: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 500; // Increased scroll amount for a larger movement
      const newPosition =
        scrollPosition + (direction === "left" ? -scrollAmount : scrollAmount);
      setScrollPosition(newPosition);
      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container sx={{ marginTop: "5rem", position: "relative" }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", marginBottom: "2rem", textAlign: "center" }}
      >
        Recently Posted Jobs
      </Typography>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Grid container alignItems="center" justifyContent="center" spacing={3}>
          <Grid
            item
            xs={1}
            sx={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
            }}
          >
            <IconButton onClick={() => handleScroll("left")}>
              <ArrowBackIosIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <Box
              ref={scrollRef}
              sx={{
                display: "flex",
                overflowX: "auto",
                scrollBehavior: "smooth",
                paddingBottom: "1rem",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {jobs.map((job, index) => (
                <Card
                  key={index}
                  sx={{
                    minWidth: "300px", // Increased card width
                    maxWidth: "300px",
                    marginRight: "1.5rem", // Increased spacing between cards
                    flexShrink: 0,
                    boxShadow: 6,
                    borderRadius: "20px",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {job.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {job.description}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{ marginTop: "0.5rem" }}
                    >
                      <StarIcon sx={{ color: "#ffb400", fontSize: "20px" }} />{" "}
                      {job.rating}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {job.time} | {job.bid}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
            }}
          >
            <IconButton onClick={() => handleScroll("right")}>
              <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Carousel;

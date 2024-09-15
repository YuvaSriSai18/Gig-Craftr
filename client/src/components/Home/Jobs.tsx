import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import {jobs} from '../../Constants/jobs'


const Jobs: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newPosition =
        scrollPosition + (direction === "left" ? -scrollAmount : scrollAmount);
      setScrollPosition(newPosition);
      scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
    }
  };

  return (
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      <Grid item>
        <IconButton onClick={() => handleScroll("left")}>
          <ArrowBackIosIcon />
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
                minWidth: "250px",
                maxWidth: "250px",
                marginRight: "1rem",
                flexShrink: 0,
                boxShadow: 3,
                borderRadius: "15px",
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {job.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {job.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginTop: "0.5rem" }}
                >
                  {job.time}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0.5rem",
                  }}
                >
                  <StarIcon
                    sx={{
                      color: "#ffb400",
                      fontSize: "1rem",
                      marginRight: "0.25rem",
                    }}
                  />{" "}
                  {job.rating}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", marginTop: "1rem" }}
                >
                  Highest Bid: {job.bid}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Grid>

      <Grid item>
        <IconButton onClick={() => handleScroll("right")}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Jobs;

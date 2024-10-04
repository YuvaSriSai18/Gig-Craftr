// import React from 'react';
import { Avatar, Card, Typography, Button, Box, Rating } from "@mui/material";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import { Link } from "react-router-dom";
interface Freelancer {
  name: string;
  role: string;
  rate: string;
  jobSuccess: string;
  projects: string;
  location?: string;
  rating: number;
}

const FreelancerCard = ({ freelancer }: { freelancer: Freelancer }) => (
  <Card
    sx={{
      display: "flex",
      alignItems: { xs: "flex-start", sm: "center" }, // Align vertically for small screens, horizontally for larger
      flexDirection: { xs: "column", sm: "row" }, // Column on small screens, row on larger
      p: { xs: 2, sm: 3 }, // Padding adjusts based on screen size
      borderRadius: 4,
      mb: 2,
      width: "100%",
      height: { xs: "auto", sm: "234px" }, // Auto height for mobile, fixed for larger screens
      backgroundColor: "white", // Light blue background
    }}
  >
    <Avatar
      sx={{
        width: { xs: 100, sm: 140 }, // Increased size of avatar
        height: { xs: 100, sm: 140 },
        mb: { xs: 2, sm: 0 },
        mr: { sm: 2 },
        backgroundColor: "#1E88E5", // Blue background for avatar
      }}
    />
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "30px", sm: "30px" },
          fontWeight: "bold",
        }}
      >
        {freelancer.name} - {freelancer.role}
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{ fontSize: { xs: "14px", sm: "16px" } }}
      >
        {freelancer.rate} · {freelancer.jobSuccess} · {freelancer.projects} ·{" "}
        {freelancer.location || "Remote"}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
        <Rating
          value={freelancer.rating}
          readOnly
          precision={0.5}
          sx={{ fontSize: { xs: "30px", sm: "35px" } }} // Increased size of rating stars
        />
        <Typography
          variant="body2"
          sx={{
            ml: 1,
            fontSize: { xs: "20px", sm: "22px" },
            color: "text.primary",
          }} // Increased font size for rating text
        >
          {freelancer.rating}
        </Typography>
        <ChatBubbleOutlineRoundedIcon
          sx={{ marginLeft: "0.5rem", color: "grey.600", cursor: "pointer" }}
        />
      </Box>
    </Box>
    <Link to="/view-profile">
      <Button
        variant="contained"
        sx={{
          ml: { xs: 0, sm: 2 },
          mt: { xs: 2, sm: 0 },
          borderRadius: "18px",
          width: { xs: "100%", sm: "auto" },
          fontSize: { xs: "18px", sm: "20px" }, // Increased font size for button text
          padding: { xs: "12px 24px", sm: "16px 32px" }, // Increased padding for larger button
          backgroundColor: "#1E88E5",
          color: "white",
          "&:hover": {
            backgroundColor: "#1565C0",
          },
        }}
      >
        View Profile
      </Button>
    </Link>
  </Card>
);

export default FreelancerCard;

import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  Chip,
  Divider,
} from "@mui/material";

export default function ViewProject() {
  // Dummy project data
  const project = {
    title: "E-Commerce Website",
    description: `Need an experienced Full Stack Developer to build an e-commerce website.

    Key Requirements:
    - Implement a fully functional e-commerce platform that supports product listings, categories, and search functionality.
    - Set up a secure payment gateway for processing online transactions.
    - Integrate a robust user-friendly interface for product management, including the ability to add, edit, or remove products.
    - Enable customer registration, login, and profile management.
    - Include features such as shopping cart, checkout process, and order tracking.
    `,
    priceRange: "$600 - $800 USD",
    biddingEnd: "Bidding ends in 6 days, 23 hours",
    skills: ["React.js", "Node.js", "Firebase", "JavaScript", "CSS"],
  };

  return (
    <Box sx={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
      {/* Grid Container */}
      <Grid container spacing={2} display={"flex"} flexDirection={"row"} 
      sx={{
        backgroundColor: "transparent",
      }}>
        {/* Top Box: Project Details with bidding info */}
        <Grid item xs={12} 
          sx={{
            backgroundColor: "transparent"}}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1rem",
              backgroundColor: "#e3f2fd",
              borderRadius: "8px",
              alignItems: "center",
              backgroundColor: "#1E88E5"
            }}
          >
            <Grid item xs={6} display={"flex"} flexDirection={"row"} >
            <Typography variant="h6" sx={{ fontWeight: "bold"}}>
              Project Details
            </Typography>
            </Grid>
            <Grid item xs={6}  >
            <Box sx={{ textAlign: "right" }} display={"flex"} flexDirection={"column"}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                {project.priceRange}
              </Typography>
              <Typography variant="body2" sx={{ color: "#1976d2" }}>
                {project.biddingEnd}
              </Typography>
            </Box>
            </Grid>
            {/* Left Box (3/5 width) */}
        <Grid item xs={12} >
          <Card sx={{ padding: "1.5rem", borderRadius: "8px", backgroundColor: "#f5f5f5" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
              {project.title}
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line", color: "#333" }}>
              {project.description}
            </Typography>
          </Card>

          {/* Skills Section */}
          <Box sx={{ marginTop: "1.5rem" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
              Skills Required
            </Typography>
            <Grid container spacing={1}>
              {project.skills.map((skill, index) => (
                <Grid item key={index}>
                  <Card
                    sx={{
                      padding: "0.5rem 1rem",
                      borderRadius: "24px",
                      backgroundColor: "#e3f2fd",
                      border: "1px solid #1976d2",
                    }}
                  >
                    <Typography variant="body2">{skill}</Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Grid>

        

        {/* Right Box (2/5 width) */}
        <Grid item xs={12} sm={5}>
          <Card sx={{ padding: "1.5rem", borderRadius: "8px", backgroundColor: "#f5f5f5" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
              Additional Information
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" }}>
              This section can be used for extra project details or client information.
            </Typography>
            <Divider sx={{ marginY: "1rem" }} />
            <Button variant="contained" color="primary" fullWidth>
              View Profile
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

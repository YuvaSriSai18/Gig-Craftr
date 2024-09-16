// import React from "react";
import {
    Box,
    Typography,
    Button,
    Grid,
    Card,
    Rating,
    TextField,
    InputAdornment,
    // Divider,
  } from "@mui/material";
  import StarIcon from "@mui/icons-material/Star";
  import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
  // import Footer from "../../components/Footer/Footer";
  import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
  import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
  import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
  
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
        <Grid
          container
          spacing={2}
          display={"flex"}
          flexDirection={"row"}
          sx={{
            backgroundColor: "transparent",
          }}
        >
          {/* Top Box: Project Details with bidding info */}
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "transparent",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "1rem",
                borderRadius: "8px",
                alignItems: "center",
                backgroundColor: "#78b4ec",
              }}
            >
              <Grid item xs={6} display={"flex"} flexDirection={"row"}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Project Details
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{ textAlign: "right" }}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#1976d2" }}
                  >
                    {project.priceRange}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#1976d2" }}>
                    {project.biddingEnd}
                  </Typography>
                </Box>
              </Grid>
              {/* Left Box (3/5 width) */}
              <Grid item xs={12}>
                <Card
                  sx={{
                    padding: "1.5rem",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                    border: "none", // Remove black outline
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", marginBottom: "1rem" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ whiteSpace: "pre-line", color: "#333" }}
                  >
                    {project.description}
                  </Typography>
                </Card>
  
                {/* Skills Section */}
                <Box sx={{ marginTop: "1.5rem" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginBottom: "1rem" }}
                  >
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
                            border: "none", // Remove black outline
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
  
          {/* Updated Right Box (8/12 width) */}
          <Grid item xs={8}>
            <Card
              sx={{ padding: "1.5rem", borderRadius: "8px", backgroundColor: "#78b4ec" }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "1rem", color: "whitesmoke", textShadow: "-1px 1px 10px rgba(0, 0, 0, 0.3)" }}
              >
                Place a bid on this project
              </Typography>
  
             <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
    <Typography
      sx={{
        color: "whitesmoke",
        textShadow: "-1px 1px 10px rgba(0, 0, 0, 0.75)",
        marginBottom: "0.5rem", // Add some spacing between label and input
      }}
    >
      Bid Amount
    </Typography>
  
    {/* Bid Amount Input */}
    <TextField
      variant="outlined"
      // fullWidth
      InputProps={{
        endAdornment: <InputAdornment position="end">USD</InputAdornment>,
      }}
      sx={{
        backgroundColor: "white",
        borderRadius: "14px", // Set borderRadius for Bid Amount
        "& fieldset": { border: "none" }, // Remove black outline
      }}
    />
  </Box>
  <Typography
      sx={{
        color: "whitesmoke",
        textShadow: "-1px 1px 10px rgba(0, 0, 0, 0.75)",
        marginBottom: "0.5rem", // Add some spacing between label and input
      }}
    >
      Paid to you: $100 - $50 fee = $50
    </Typography>
  
              <br />
              <Typography
      sx={{
        color: "whitesmoke",
        textShadow: "-1px 1px 10px rgba(0, 0, 0, 0.75)",
        marginBottom: "0.5rem", // Add some spacing between label and input
      }}
    >
      This project will be delivered in
    </Typography>
              {/* Deadline Input */}
              <TextField
                variant="outlined"
                // fullWidth
                InputProps={{
                  endAdornment: <InputAdornment position="end">DAYS</InputAdornment>,
                }}
                sx={{
                  marginBottom: "1rem",
                  backgroundColor: "white",
                  borderRadius: "14px", // Set borderRadius for Deadline
                  "& fieldset": { border: "none" }, // Remove black outline
                }}
              />
  <Typography
      sx={{
        color: "whitesmoke",
        textShadow: "-1px 1px 10px rgba(0, 0, 0, 0.75)",
        marginBottom: "0.5rem", // Add some spacing between label and input
      }}
    >
      Describe your Proposal (minimum 100 characters)
    </Typography>
              {/* Description Input */}
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                sx={{
                  marginBottom: "1rem",
                  padding:"2px",
                  backgroundColor: "white",
                  borderRadius: "14px", // Set borderRadius for Description
                  "& fieldset": { border: "#78b4ec" }, // Remove black outline
                }}
              />
  
  <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
    <Button variant="contained" color="primary">
      Place Bid
    </Button>
  </Box>
  
            </Card>
          </Grid>
  
          {/* Right Box (4/12 width) */}
          <Grid item xs={4}>
            <Card
              sx={{ padding: "1.5rem", borderRadius: "8px", backgroundColor: "#78b4ec" }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "1rem", color: "whitesmoke", textShadow: "-1px 1px 10px rgba(0, 0, 0, 0.3)" }}
              >
                About the Client <br />
                <Typography sx={{marginBottom:"2px"}}>
                  <LocationOnOutlinedIcon sx={{marginRight: "8px"}}/>
                  <Box component="span" sx={{ color: "black" }}>India</Box>
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center",marginBottom:"2px" }}>
                  <PersonOutlineOutlinedIcon />
                    <Rating
                      name="read-only"
                      value={4} // Pass number value without quotes for proper rating functionality
                      precision={0.5}
                      readOnly
                      icon={<StarIcon fontSize="inherit" />}
                      sx={{ marginX: "0.5rem" }} // Add some spacing between the rating and the icons
                    />
                  <ChatBubbleOutlineRoundedIcon sx={{ color: "black", marginLeft: "0.5rem" }} />
                </Box>
  
                <Typography>
                  <AccessTimeOutlinedIcon sx={{marginRight: "8px"}}/>
                  <Box component="span" sx={{ color: "black" }}>Member since Aug 4, 2023</Box>
                </Typography>
  
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "1rem", color: "whitesmoke", textShadow: "-1px 1px 10px rgba(0, 0, 0, 0.3)" }}
              >
                About the Client <br />
                <Typography sx={{marginBottom:"2px"}}>
                  <Box component="span" sx={{ color: "black" }}>
                    -Identity verified
                  </Box>
                </Typography>
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "1rem", color: "whitesmoke", textShadow: "-1px 1px 10px rgba(0, 0, 0, 0.3)" }}
              >
                About the Client <br />
                <Typography sx={{marginBottom:"2px"}}>
                  <LocationOnOutlinedIcon sx={{marginRight: "8px"}}/>
                  <Box component="span" sx={{ color: "black" }}>India</Box>
                </Typography>
              </Typography>
  
              {/* <Typography variant="body2" sx={{ color: "whitesmoke" }}>
                This section can be used for extra project details or client information.
              </Typography> */}
              {/* <Divider sx={{ marginY: "1rem" }} /> */}
              <Button variant="contained" color="primary" fullWidth>
                View Profile
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  }
<<<<<<< HEAD
// import React from 'react'
=======
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Rating,
  TextField,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TurnedInOutlinedIcon from "@mui/icons-material/TurnedInOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
>>>>>>> 0b3194c3dbfed9e1494c58a521a53ddc3da05de8

// Define TypeScript interfaces
interface Project {
  title: string;
  description: string;
  category: string;
  bids: number;
  price: string;
  rating: number;
  timePosted: string;
}

const projects: Project[] = [
  // Your project data here
  {
    title: "E-Commerce Website",
    description: "Need an experienced Full Stack Developer to build a custom e-commerce website.",
    category: "Web Development",
    bids: 0,
    price: "750 USD",
    rating: 4,
    timePosted: "37 seconds ago",
  },
  {
    title: "Website Development Using WordPress",
    description: "Looking for an experienced WordPress Developer.",
    category: "Web Development",
    bids: 0,
    price: "250 USD",
    rating: 3,
    timePosted: "59 seconds ago",
  },
  {
    title: "Data Entry in Microsoft Word",
    description: "Looking for an experienced person who can type fast.",
    category: "Typing",
    bids: 0,
    price: "50 USD",
    rating: 2,
    timePosted: "1 minute ago",
  },
  {
    title: "Python Developer",
    description: "Need an experienced Python Developer.",
    category: "Software Development",
    bids: 10,
    price: "100 USD per hour",
    rating: 5,
    timePosted: "10 minutes ago",
  },
  {
    title: "C++ Developer",
    description: "I want a C++ Developer who has a strong foundation in data structures.",
    category: "Software Development",
    bids: 45,
    price: "75 USD per hour",
    rating: 4,
    timePosted: "27 minutes ago",
  },
  {
    title: "Machine Learning Using Python",
    description: "Need an experienced Python Developer who has a strong foundation in ML/AI.",
    category: "Software Development",
    bids: 90,
    price: "175 USD per hour",
    rating: 5,
    timePosted: "59 minutes ago",
  },
  {
    title: "Figma Designer",
    description: "I want a Figma designer who can design responsive websites.",
    category: "Web Design",
    bids: 120,
    price: "600 USD",
    rating: 4,
    timePosted: "1 hour ago",
  },
  {
    title: "React Developer",
    description: "Looking for an experienced React developer.",
    category: "Software Development",
    bids: 300,
    price: "200 USD",
    rating: 3,
    timePosted: "3 hours ago",
  },
  {
    title: "Backend Developer",
    description: "Need an experienced Backend Developer to build websites.",
    category: "Software Development",
    bids: 500,
    price: "800 USD",
    rating: 4,
    timePosted: "5 hours ago",
  },
  {
    title: "PHP Developer",
    description: "Looking for an experienced PHP Developer to build games.",
    category: "Software Development",
    bids: 600,
    price: "800 USD",
    rating: 4,
    timePosted: "6 hours ago",
  },
];

// Function to shuffle array
const shuffleArray = (array: Project[]): Project[] => {
  return array
    .map((item) => ({ ...item, sort: Math.random() })) // Add random sort value to each item
    .sort((a, b) => a.sort - b.sort) // Sort by random value
    .map(({ sort, ...item }) => item); // Remove random sort value
};

// Styled component for card layout
const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: "12px",
}));

// Props type for ProjectCard component
interface ProjectCardProps {
  project: Project;
}

// A component to represent a single project
function ProjectCard({ project }: ProjectCardProps) {
  const [saved, setSaved] = useState<boolean>(false); // State to toggle the save button
  const [commentsOpen, setCommentsOpen] = useState<boolean>(false); // State to manage comments

  const toggleSave = () => {
    setSaved((prev) => !prev);
  };

  const handleCommentsClick = () => {
    setCommentsOpen((prev) => !prev);
    console.log("Comment button clicked");
  };

  const hasBids = project.bids > 0;

  return (
    <StyledCard>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: "0.5rem" }}>
              {project.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: "0.5rem", borderRadius: "14px" }}
            >
              View Project
            </Button>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}>
              <Rating
                name="read-only"
                value={project.rating}
                precision={0.5}
                readOnly
                icon={<StarIcon fontSize="inherit" />}
              />
              <ChatBubbleOutlineRoundedIcon
                sx={{ marginLeft: "0.5rem", color: "grey.600", cursor: "pointer" }}
                onClick={handleCommentsClick}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: "right", position: "relative" }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              <Typography variant="body2" sx={{ marginRight: "1rem", color: "text.secondary" }}>
                {project.timePosted}
              </Typography>
              <Button
                onClick={toggleSave}
                sx={{
                  minWidth: "auto",
                  padding: 0,
                  color: saved ? "primary.main" : "black",
                  border: "none",
                }}
              >
                {saved ? <TurnedInOutlinedIcon /> : <TurnedInNotOutlinedIcon />}
              </Button>
            </Box>

            <Typography variant="h6" sx={{ textAlign: "right", marginTop: "2rem" }}>
              {project.bids} Bids
            </Typography>

            {hasBids && (
              <Box sx={{ textAlign: "right", marginTop: "1rem" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  ${parseFloat(project.bids.toString()).toFixed(2)} USD
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
                  average bid
                </Typography>
              </Box>
            )}

            {!hasBids && (
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "2rem", borderRadius: "19px", alignSelf: "flex-end" }}
              >
                Be first to bid
              </Button>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
}

// Main component
export default function FindWork() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>(shuffleArray(projects.slice(0, 6))); // Display first 6 projects initially

  const categories: string[] = ["Web Development", "Software Development", "Typing", "Web Design"];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedCategory(e.target.value as string);
  };

  const handleLoadMore = () => {
    const additionalProjects = shuffleArray([...projects]).slice(0, 3); // Shuffle and load 3 random projects
    setDisplayedProjects((prev) => [...prev, ...additionalProjects]);
  };

  const filteredProjects = displayedProjects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "" || project.category === selectedCategory)
  );

  return (
    <Box sx={{ padding: "2rem" }}>
      <Box sx={{ marginBottom: "2rem", display: "flex", gap: 2 }}>
        <TextField
          // label="Search Projects"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Projects" // Placeholder text
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              backgroundColor: "white", // White background
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Drop shadow at the bottom
              borderRadius: "8px", // Rounded corners
              "& fieldset": {
                border: "none", // Remove black outline
              },
            },
          }}
        />
        <TextField
          select
          label="Filter by Category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          fullWidth
          sx={{
            backgroundColor: "white", // White background
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Drop shadow at the bottom
            borderRadius: "8px", // Rounded corners
            "& fieldset": {
              border: "none", // Remove black outline
            },
          }}
        >
          <MenuItem value="">All Categories</MenuItem>
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Grid container spacing={2}>
        {filteredProjects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: "2rem", textAlign: "center" }}>
        <Button variant="contained" onClick={handleLoadMore}>
          Load More Projects
        </Button>
      </Box>
    </Box>
  );
}

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
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { projects } from "../../Constants/projects.js";

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
  const navigate = useNavigate(); // Initialize navigate hook

  const toggleSave = () => {
    setSaved((prev) => !prev);
  };

  const handleCommentsClick = () => {
    setCommentsOpen((prev) => !prev);
  };

  const handleViewProject = () => {
    // Navigate to the ViewProject page and pass project id or data
    navigate('/view-project', { state: { project } });
    // navigate(/view-project/${project.title}, { state: { project } });
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
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: "0.5rem" }}
            >
              {project.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: "0.5rem", borderRadius: "14px" }}
              onClick={handleViewProject} // Set the click handler
            >
              View Project
            </Button>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "0.5rem",
              }}
            >
              <Rating
                name="read-only"
                value={project.rating}
                precision={0.5}
                readOnly
                icon={<StarIcon fontSize="inherit" />}
              />
              <ChatBubbleOutlineRoundedIcon
                sx={{
                  marginLeft: "0.5rem",
                  color: "grey.600",
                  cursor: "pointer",
                }}
                onClick={handleCommentsClick}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ textAlign: "right", position: "relative" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ marginRight: "1rem", color: "text.secondary" }}
              >
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

            <Typography
              variant="h6"
              sx={{ textAlign: "right", marginTop: "2rem" }}
            >
              {project.bids} Bids
            </Typography>

            {hasBids && (
              <Box sx={{ textAlign: "right", marginTop: "1rem" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {project.price}
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
                sx={{
                  marginTop: "2rem",
                  borderRadius: "19px",
                  alignSelf: "flex-end",
                }}
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
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>(
    shuffleArray(projects.slice(0, 6))
  ); // Display first 6 projects initially

  const categories: string[] = [
    "Web Development",
    "Software Development",
    "Typing",
    "Web Design",
  ];

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

  const filteredProjects = displayedProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || project.category === selectedCategory)
  );

  return (
    <>
      <Box sx={{ padding: "2rem" }}>
        <Box sx={{ marginBottom: "2rem", display: "flex", gap: 2 }}>
          <TextField
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Projects"
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
                border: "none",
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
      <Footer />
    </>
  );
}
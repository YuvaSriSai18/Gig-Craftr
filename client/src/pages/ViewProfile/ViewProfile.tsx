import React, { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  Button,
  Avatar,
  Collapse,
  Rating,
  IconButton,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

interface SectionProps {
  title: string;
  content: string;
}

const ExpandableSection: React.FC<SectionProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Paper elevation={2} sx={{ mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
          cursor: "pointer",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        {isExpanded ? (
          <RemoveRoundedIcon
            sx={{
              transition: "transform 0.3s",
            }}
          />
        ) : (
          <AddRoundedIcon
            sx={{
              transition: "transform 0.3s",
            }}
          />
        )}
      </Box>
      <Collapse in={isExpanded}>
        <Box sx={{ p: 2 }}>{content}</Box>
      </Collapse>
    </Paper>
  );
};

const FreelancerProfile: React.FC = () => {
  // Sample content for each section
  const portfolioContent = "Add your portfolio content here.";
  const experienceContent = "Add your experience details here.";
  const educationContent = "Add your education information here.";
  const qualificationsContent = "Add your qualifications here.";
  const publicationsContent = "Add your publications here.";
  const articlesContent = "Add your articles here.";

  return (
    <Box sx={{ bgcolor: "blue.100", minHeight: "100vh", p: { xs: 2, sm: 4 } }}>
      <Paper
        sx={{
          maxWidth: 900,
          mx: "auto",
          borderRadius: 2,
          overflow: "hidden",
          bgcolor: "background.paper",
          p: { xs: 2, sm: 4 },
        }}
      >
        {/* Header */}
        <Box sx={{ position: "relative", bgcolor: "grey.300", height: 128 }}>
          <Box
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              bgcolor: "white",
              p: 1,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="GigCraftr Logo"
              src="/api/placeholder/24/24"
              sx={{ width: 32, height: 32, mr: 1 }}
            />
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "blue.600" }}
            >
              GIGCRAFTR
            </Typography>
          </Box>
          <IconButton sx={{ position: "absolute", top: 8, right: 8 }}>
            <EditRoundedIcon sx={{ color: "#1565C0" }} />
          </IconButton>
        </Box>

        {/* Profile Info */}
        <Box sx={{ p: { xs: 2, sm: 4 }, position: "relative" }}>
          <Avatar
            alt="Profile"
            src="/api/placeholder/80/80"
            sx={{
              width: 80,
              height: 80,
              borderWidth: 4,
              borderStyle: "solid",
              borderColor: "white",
              position: "absolute",
              top: -40,
              left: 16,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
              mb: 4,
            }}
          >
            <Button variant="contained" color="primary">
              Reviews
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ ml: { xs: 0, sm: 1 }, mt: { xs: 1, sm: 0 } }}
            >
              View Freelance Profile
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ ml: { xs: 0, sm: 1 }, mt: { xs: 1, sm: 0 } }}
            >
              Edit Profile
            </Button>
          </Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            James Anderson
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2, textAlign: { xs: "center", sm: "left" } }}
          >
            $15/hr • 100% Job Success • 50+ projects • India
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-start" },
              mb: 2,
            }}
          >
            <Rating value={4} readOnly />
            <AccessTime sx={{ ml: 2, mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              Member since Mar 15, 2022
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            I am a multifaceted individual with a passion for technology and
            problem-solving. Proficient in HTML, CSS, JavaScript, React.Js, C,
            C++, and Python, I bring a diverse skill set to the table. My
            expertise spans web development and general-purpose programming,
            complemented by a solid understanding of data structures.
            Detail-oriented and driven, I thrive on challenges and am always
            eager to explore new avenues in the ever-evolving world of software
            development.
          </Typography>
        </Box>

        {/* Expandable Sections */}
        <Box sx={{ p: { xs: 2, sm: 4 } }}>
          <ExpandableSection title="Portfolio" content={portfolioContent} />
          <ExpandableSection title="Experience" content={experienceContent} />
          <ExpandableSection title="Education" content={educationContent} />
          <ExpandableSection
            title="Qualifications"
            content={qualificationsContent}
          />
          <ExpandableSection
            title="Publications"
            content={publicationsContent}
          />
          <ExpandableSection title="Articles" content={articlesContent} />
        </Box>
      </Paper>
    </Box>
  );
};

export default FreelancerProfile;

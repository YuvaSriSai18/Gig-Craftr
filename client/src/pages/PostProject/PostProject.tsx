import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const ProjectForm = () => {
  const [selectedRateType, setSelectedRateType] = useState("Fixed Price");

  const handleRateTypeSelection = (rateType: string) => {
    setSelectedRateType(rateType);
  };

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30px",
        p: 2,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "800px" }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: 3,
            padding: 4,
            position: "relative", // Corrected the absolute positioning issue
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-30px",
              right: "-30px",
              width: "60px",
              height: "60px",
              backgroundColor: "#83B3E8",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "5px",
              }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=7819&format=png&color=228BE6"
                alt="icon"
                style={{ width: "40px", height: "40px" }}
              />
            </Box>
          </Box>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { mb: 2, width: "100%" },
            }}
          >
            <TextField
              label="Project Name"
              placeholder="e.g. E-Commerce Website"
              variant="outlined"
              fullWidth
            />

            <TextField
              label="Describe in a line"
              placeholder="e.g. Need an experienced Full Stack Developer to build e-commerce website."
              variant="outlined"
              fullWidth
            />

            <TextField
              label="Project Description"
              placeholder="Provide a detailed description"
              variant="outlined"
              multiline
              rows={6}
              fullWidth
            />

            <TextField
              label="Skills Required"
              placeholder="e.g. React, Node.js, Firebase"
              variant="outlined"
              fullWidth
            />

            <TextField
              label="Budget Range"
              placeholder="e.g. $100 - $1000"
              variant="outlined"
              fullWidth
            />

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant={
                  selectedRateType === "Fixed Price" ? "contained" : "outlined"
                }
                onClick={() => handleRateTypeSelection("Fixed Price")}
                fullWidth
              >
                Fixed Price
              </Button>
              <Button
                variant={
                  selectedRateType === "Hourly Rate" ? "contained" : "outlined"
                }
                onClick={() => handleRateTypeSelection("Hourly Rate")}
                fullWidth
              >
                Hourly Rate
              </Button>
            </Box>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Start Date"
                  placeholder="MM/DD/YYYY"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="End Date"
                  placeholder="MM/DD/YYYY"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", color: "#000" }}
              >
                Attachments
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: "#000" }}>
                Add any files that help explain your project. This could be a
                design file, a project brief, or anything else you think is
                helpful.
              </Typography>

              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "#333" },
                }}
                onClick={handleUploadClick}
              >
                Upload Files
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1E88E5",
                  ":hover": { backgroundColor: "#1565C0" },
                  width: { xs: "120px", sm: "200px" },
                  fontSize: {
                    xs: "11px",
                    sm: "16px",
                  },
                  height: {
                    xs: "30px",
                    sm: "50px",
                  },
                  borderRadius: "14px",
                  mt: 3,
                  float: "right",
                  mb: 3,
                }}
                onClick={() => {
                  console.log(`Post Project btn is clicked`);
                }}
              >
                Post Project
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectForm;

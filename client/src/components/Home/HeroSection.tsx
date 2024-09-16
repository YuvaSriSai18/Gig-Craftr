import React from "react";
import { Box,  Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LaptopGuy from "../../assets/laptopguy.png"; // Update the path as needed
// import { Margin } from '@mui/icons-material';

const HeroSection: React.FC = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        p={{ md: 5 }}
        justifyContent={"space-around"}
      >
        <Box
          width={{ xs: "100%", sm: "50%", md: "60%" }}
          ml={{ xs: 1 }}
          sx={{ xs: 3, sm: 2, md: 0 }}
        >
          <Typography variant="h2" component="h2" gutterBottom>
            Are you{" "}
            <Typography
              component="span"
              sx={{ color: "#2196f3", fontSize: "70px", fontWeight: "100" }}
            >
              looking
            </Typography>{" "}
            for <br /> Freelancers?
          </Typography>
          <Typography
            variant="body1"
            width={{ md: "500px" }}
            m={1.5}
            color="textSecondary"
            gutterBottom
          >
            Find top-tier freelancers instantly. Freelancing connects you with
            expert talent, ready to elevate your project in no time!
          </Typography>

          {/* Buttons */}
          <Box
            display={"flex"}
            gap={2}
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1e88e5",
                textTransform: "none",
                fontSize: "21px",
                borderRadius: "15px",
                width: {
                  xs: "60%",
                  md: "30%",
                },
              }}
            >
              Hire a Freelancer
            </Button>
            <TextField
              variant="outlined"
              placeholder="Search freelance work"
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
              sx={{
                backgroundColor: "white",
                borderRadius: "12px",
                width: { xs: "95%", sm: "300px" },
              }}
            />
          </Box>
        </Box>
        <Box
          component={"img"}
          src={LaptopGuy}
          alt="Laptop Guy Illustration"
          sx={{
            width: "100%",
            maxWidth: { xs: "350px", sm: "250px", md: "400px" },
          }}
        />
      </Box>
    </>
  );
};

export default HeroSection;

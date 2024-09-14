import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// Import the image
import LaptopGuy from './assets/laptopguy.png';  // Update the path as needed

const HomePage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#e3f2fd', minHeight: '100vh', padding: '2rem' }}>
      {/* Navbar */}
      <Grid container justifyContent="space-between" alignItems="center" sx={{ paddingBottom: '1rem' }}>
        <Grid item>
          <img src="logo.png" alt="Gigcraftr Logo" style={{ height: '40px' }} />
        </Grid>
        <Grid item>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Typography variant="body1" component="a" href="#home" sx={{ textDecoration: 'none', color: 'black' }}>
                Home
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" component="a" href="#find-work" sx={{ textDecoration: 'none', color: 'black' }}>
                Find Work
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" component="a" href="#find-freelancers" sx={{ textDecoration: 'none', color: 'black' }}>
                Find Freelancers
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{ backgroundColor: '#2196f3', borderRadius: '20px', textTransform: 'none' }}>
                Post a Project
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="body1" component="a" href="#sign-in" sx={{ textDecoration: 'none', color: 'black' }}>
                Sign In
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Hero Section */}
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h2" gutterBottom>
            Are you <Typography component="span" sx={{ color: '#2196f3',fontSize: '70px' }}>looking </Typography>for Freelancers?
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Find top-tier freelancers instantly. Freelancing connects you with expert talent, ready to elevate your project in no time!
          </Typography>

          {/* Buttons */}
          <Grid container spacing={2} alignItems="center" sx={{ marginTop: '2rem' }}>
            <Grid item>
              <Button variant="contained" sx={{ backgroundColor: '#2196f3', textTransform: 'none' }}>
                Hire a Freelancer
              </Button>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                placeholder="Search freelance work"
                InputProps={{
                  endAdornment: <SearchIcon />
                }}
                sx={{ backgroundColor: 'white', borderRadius: '4px', width: '300px' }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Illustration */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={LaptopGuy} // Use the imported image here
            alt="Laptop Guy Illustration"
            sx={{ width: '100%', maxWidth: '400px', marginTop: { xs: '2rem', md: '0' } }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;

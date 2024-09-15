import React from 'react';
import { Box, Button, Grid, TextField, Typography, Card, CardContent, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// Icons for the Info Section
import LockIcon from '@mui/icons-material/Lock';
import SearchIconForCard from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// Import the images
import LaptopGuy from './assets/laptopguy.png';  // Update the path as needed
import GigcraftrLogo from './assets/gigcrftr.png';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#e3f2fd', minHeight: '100vh', padding: '2rem' }}>
      {/* Navbar */}
      <Grid container justifyContent="space-between" alignItems="center" sx={{ paddingBottom: '1rem' }}>
        <Grid item>
          <img src={GigcraftrLogo} alt="Gigcraftr Logo" style={{ height: '120px' }} />
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
      <Grid container justifyContent="space-between" alignItems="center" sx={{ minHeight: 'calc(60vh - 90px)' }}>
        {/* Text Content - Aligned to the left */}
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h2" gutterBottom>
            Are you <Typography component="span" sx={{ color: '#2196f3', fontSize: '70px', fontWeight: '100' }}>looking</Typography> for Freelancers?
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

        {/* Illustration - Aligned to the right */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={LaptopGuy} // Use the imported image here
            alt="Laptop Guy Illustration"
            sx={{ width: '100%', maxWidth: '400px', display: 'block', marginLeft: 'auto' }}
          />
        </Grid>
      </Grid>

      {/* Updated Info Section - Single Card with 3 Flex Items */}
      <Container sx={{ marginTop: '5rem' }}>
        <Card sx={{ borderRadius: '15px', boxShadow: 3 }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Grid container justifyContent="space-around" alignItems="center" spacing={4}>
              {/* First Section */}
              <Grid item xs={12} md={4}>
                <LockIcon sx={{ fontSize: '50px', color: '#2196f3' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '1rem' }}>
                  Create Account
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  First you have to create an account here
                </Typography>
              </Grid>

              {/* Second Section */}
              <Grid item xs={12} md={4}>
                <SearchIconForCard sx={{ fontSize: '50px', color: '#2196f3' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '1rem' }}>
                  Search Work
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Search the best freelance work here
                </Typography>
              </Grid>

              {/* Third Section */}
              <Grid item xs={12} md={4}>
                <CheckCircleIcon sx={{ fontSize: '50px', color: '#2196f3' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '1rem' }}>
                  Save and Apply
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Apply or save and start your work
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>

      {/* Additional Text Section */}
      <Box sx={{ textAlign: 'center', marginTop: '4rem' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Find The Best{' '}
          <Typography component="span" sx={{ color: '#2196f3' }}>
            Freelancers
          </Typography>{' '}
          Here
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '600px', margin: '1rem auto' }}>
          Discover the best freelancers for your project with ease. Our platform connects you with top talent across
          various industries, ensuring high-quality work and fast project completion.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;

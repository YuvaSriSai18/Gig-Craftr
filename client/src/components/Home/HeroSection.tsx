import React from 'react';
import { Box, Grid, Button, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LaptopGuy from '../../assets/laptopguy.png';  // Update the path as needed
import { Margin } from '@mui/icons-material';

const HeroSection: React.FC = () => {
  return (
    <Grid container justifyContent="space-between" alignItems="center" sx={{ minHeight: 'calc(60vh - 90px)' ,marginBottom:'3rem',marginLeft:'50px'}}>
      {/* Text Content */}
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
            <Button variant="contained" sx={{ backgroundColor: '#2196f3', textTransform: 'none', fontSize: '25px', borderRadius: '15px' }}>
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
          src={LaptopGuy}
          alt="Laptop Guy Illustration"
          sx={{ width: '100%', maxWidth: '400px', display: 'block', marginLeft: 'auto' }}
        />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
// import React from 'react';
import { TextField, Button, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const FreelancerSearch = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={{ xs: 'column', sm: 'row' }} // Adjusts direction on small screens
      gap={2} // Use smaller gap for mobile view
      p={2}
      sx={{
        width: '100%', // Ensure it takes full width of container
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search for freelancers"
        // size="small"
        sx={{
          width: { xs: '90%', sm: '600px', md: '750px' }, // Responsive width
          height: '76px',
          backgroundColor: 'white',
          borderRadius: '15px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Shadow for input field
          '& .MuiOutlinedInput-root': {
            borderRadius: '15px',
            height: '76px',
            fontSize: '24px', // Larger text size for the input box
          },
          '& input': {
            fontSize: '21px', // Larger text inside the input field
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: '35px', color: 'black' }} /> {/* Larger black icon */}
            </InputAdornment>
          ),
        }}
      />

      {/* Top Rated Freelancers Button */}
      <Button
        variant="contained"
        // size="large"
        sx={{
          backgroundColor: '#1E88E5', 
          color: 'white', 
          borderRadius: '15px', 
          padding: '12px 32px', // Larger padding for bigger button size
          height: '80px',
          width: { xs: '90%', sm: '350px', md: '500px' }, // Responsive width
          textTransform: 'none',
          fontSize: '22px', // Larger font size for button text
          fontWeight: 'bold', 
          boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)', 
          '&:hover': {
            backgroundColor: '#1565C0',
          },
        }}
      >
        Top Rated Freelancers
      </Button>

      {/* Most Popular Freelancers Button */}
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: '#1E88E5', 
          color: 'white', 
          borderRadius: '15px',
          height: '80px',
          width: { xs: '90%', sm: '350px', md: '500px' }, // Responsive width
          padding: '12px 32px', // Larger padding
          textTransform: 'none',
          fontSize: '22px', // Larger font size for button text
          fontWeight: 'bold',
          boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)', 
          '&:hover': {
            backgroundColor: '#1565C0',
          },
        }}
      >
        Most Popular Freelancers
      </Button>
    </Box>
  );
};

export default FreelancerSearch;

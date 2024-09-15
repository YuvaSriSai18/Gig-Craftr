import React, { useState } from 'react';
import { Box, Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';

const jobs = [
  { title: 'Graphic&Design', description: 'Need a Graphic Designer to design a social media platform.', time: '10 minutes ago', bid: '$300', rating: 4.5 },
  { title: 'C++ Developer', description: 'I want a C++ Developer who has strong foundation in data structures.', time: '12 minutes ago', bid: '$200', rating: 3.5 },
  { title: 'React Developer', description: 'Need an experienced Full Stack Developer to build e-commerce website.', time: '19 minutes ago', bid: '$100', rating: 4.0 },
  { title: 'C Developer', description: 'I want a C Developer to help with an embedded system project.', time: '20 minutes ago', bid: '$500', rating: 4.2 },
  { title: 'UI/UX Designer', description: 'Looking for a UI/UX designer for a mobile application.', time: '25 minutes ago', bid: '$150', rating: 4.8 },
];

const JobsCarousel: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newPosition = scrollPosition + (direction === 'left' ? -scrollAmount : scrollAmount);
      setScrollPosition(newPosition);
      scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  return (
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      <Grid item>
        <IconButton onClick={() => handleScroll('left')}>
          <ArrowBackIosIcon />
        </IconButton>
      </Grid>

      <Grid item xs={10}>
        <Box ref={scrollRef} sx={{ display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth', paddingBottom: '1rem', '&::-webkit-scrollbar': { display: 'none' } }}>
          {jobs.map((job, index) => (
            <Card key={index} sx={{ minWidth: '250px', maxWidth: '250px', marginRight: '1rem', flexShrink: 0, boxShadow: 3, borderRadius: '15px' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{job.title}</Typography>
                <Typography variant="body2" color="textSecondary">{job.description}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: '0.5rem' }}>{job.time}</Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                  <StarIcon sx={{ color: '#ffb400', fontSize: '1rem', marginRight: '0.25rem' }} /> {job.rating}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '1rem' }}>Highest Bid: {job.bid}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Grid>

      <Grid item>
        <IconButton onClick={() => handleScroll('right')}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default JobsCarousel;

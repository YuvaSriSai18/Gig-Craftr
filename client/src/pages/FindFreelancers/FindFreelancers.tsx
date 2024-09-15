import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import FreelancerCard from '../../components/Findfreelancer/freelancercard.tsx';
import FreelancerSearch from '../../components/Findfreelancer/freelancersearchbar.tsx'
import CategoryButtons from '../../components/Findfreelancer/freelancercatogiry.tsx'

const freelancers = [
  {
    name: 'James Anderson',
    role: 'Frontend Developer',
    rate: '$15/hr',
    jobSuccess: '100% Job Success',
    projects: '50+ projects',
    location: 'India',
    rating: 5,
  },
  {
    name: 'Emily Clark',
    role: 'Backend Developer',
    rate: '$150/hr',
    jobSuccess: '98% Job Success',
    projects: '150+ projects',
    location: '',
    rating: 5,
  },
  {
    name: 'Daniel Williams',
    role: 'Python Developer',
    rate: '$60/hr',
    jobSuccess: '100% Job Success',
    projects: '100+ projects',
    location: '',
    rating: 4,
  },
  {
    name: 'Olivia Johnson',
    role: 'Java Developer',
    rate: '$150/hr',
    jobSuccess: '100% Job Success',
    projects: '60+ projects',
    location: '',
    rating: 4.5,
  },
  {
    name: 'Michael Harris',
    role: 'React Developer',
    rate: '$100/hr',
    jobSuccess: '93% Job Success',
    projects: '50+ projects',
    location: '',
    rating: 3.5,
  },
  {
    name: 'James Anderson',
    role: 'Frontend Developer',
    rate: '$15/hr',
    jobSuccess: '100% Job Success',
    projects: '50+ projects',
    location: 'India',
    rating: 4.5,
  },  {
    name: 'James Anderson',
    role: 'Frontend Developer',
    rate: '$15/hr',
    jobSuccess: '100% Job Success',
    projects: '50+ projects',
    location: 'India',
    rating: 5,
  },  {
    name: 'James Anderson',
    role: 'Frontend Developer',
    rate: '$15/hr',
    jobSuccess: '100% Job Success',
    projects: '50+ projects',
    location: 'India',
    rating: 5,
  },  {
    name: 'James Anderson',
    role: 'Frontend Developer',
    rate: '$15/hr',
    jobSuccess: '100% Job Success',
    projects: '50+ projects',
    location: 'India',
    rating: 5,
  },  {
    name: 'James Anderson',
    role: 'Frontend Developer',
    rate: '$15/hr',
    jobSuccess: '100% Job Success',
    projects: '50+ projects',
    location: 'India',
    rating: 5,
  },  {
    name: 'James Anderson',
    role: 'Frontend Developer',
    rate: '$15/hr',
    jobSuccess: '100% Job Success',
    projects: '50+ projects',
    location: 'India',
    rating: 5,
  },  {
    name: 'James Anderson',
    role: 'Frontend Developer',
    rate: '$15/hr',
    jobSuccess: '100% Job Success',
    projects: '50+ projects',
    location: 'India',
    rating: 5,
  },  {
    name: 'James Anderson',
    role: 'Frontend Developer',
    rate: '$15/hr',
    jobSuccess: '100% Job Success',
    projects: '50+ projects',
    location: 'India',
    rating: 5,
  },
];

export default function FindFreelancers() {
  const [visibleFreelancers, setVisibleFreelancers] = useState(3); // Start with showing 3 freelancers
  const [noMoreEntries, setNoMoreEntries] = useState(false); // To track if no more freelancers are available

  const loadMore = () => {
    if (visibleFreelancers + 3 >= freelancers.length) {
      setVisibleFreelancers(freelancers.length);
      setNoMoreEntries(true); // If no more freelancers, show the message
    } else {
      setVisibleFreelancers((prev) => prev + 3); // Show 3 more freelancers
    }
  };

  return (
  <>
    <div>
    <CategoryButtons/>
  </div>
  <div>
    <FreelancerSearch/>
  </div>
  <div>
  <Box sx={{ p: 2 }}>
      {freelancers.slice(0, visibleFreelancers).map((freelancer, index) => (
        <FreelancerCard key={index} freelancer={freelancer} />
      ))}

      {!noMoreEntries ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button onClick={loadMore} variant="contained">
            More Freelancers
          </Button>
        </Box>
      ) : (
        <Typography sx={{ textAlign: 'center', mt: 2 }} variant="body1" color="textSecondary">
          No More Entries
        </Typography>
      )}
    </Box>
  </div>
  </>
  );
}

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
    name: 'Sophia Martinez',
    role: 'UI/UX Designer',
    rate: '$70/hr',
    jobSuccess: '95% Job Success',
    projects: '80+ projects',
    location: 'USA',
    rating: 4.8,
  },
  {
    name: 'Liam Brown',
    role: 'Full Stack Developer',
    rate: '$120/hr',
    jobSuccess: '97% Job Success',
    projects: '120+ projects',
    location: 'UK',
    rating: 4.6,
  },
  {
    name: 'Ava Wilson',
    role: 'DevOps Engineer',
    rate: '$110/hr',
    jobSuccess: '99% Job Success',
    projects: '90+ projects',
    location: 'Canada',
    rating: 4.7,
  },
  {
    name: 'Noah Smith',
    role: 'Data Scientist',
    rate: '$140/hr',
    jobSuccess: '96% Job Success',
    projects: '110+ projects',
    location: 'Australia',
    rating: 4.5,
  },
  {
    name: 'Isabella Johnson',
    role: 'Mobile App Developer',
    rate: '$80/hr',
    jobSuccess: '94% Job Success',
    projects: '70+ projects',
    location: 'Germany',
    rating: 4.4,
  },
  {
    name: 'Ethan Davis',
    role: 'Blockchain Developer',
    rate: '$130/hr',
    jobSuccess: '98% Job Success',
    projects: '40+ projects',
    location: 'France',
    rating: 4.9,
  },
  {
    name: 'Mia Garcia',
    role: 'SEO Specialist',
    rate: '$50/hr',
    jobSuccess: '92% Job Success',
    projects: '60+ projects',
    location: 'Italy',
    rating: 4.3,
  },
  {
    name: 'James Anderson',
    role: 'Frontend Developer',
    rate: '$15/hr',
    jobSuccess: '100% Job Success',
    projects: '50+ projects',
    location: 'India',
    rating: 4.5,
  },
  {
    name: 'Oliver Martinez',
    role: 'Systems Analyst',
    rate: '$90/hr',
    jobSuccess: '97% Job Success',
    projects: '50+ projects',
    location: 'Spain',
    rating: 4.6,
  },
  {
    name: 'Charlotte Lee',
    role: 'Database Administrator',
    rate: '$100/hr',
    jobSuccess: '96% Job Success',
    projects: '75+ projects',
    location: 'Netherlands',
    rating: 4.5,
  },
  {
    name: 'Amelia Thompson',
    role: 'Cloud Engineer',
    rate: '$115/hr',
    jobSuccess: '98% Job Success',
    projects: '85+ projects',
    location: 'Sweden',
    rating: 4.7,
  },
  {
    name: 'Elijah Anderson',
    role: 'Game Developer',
    rate: '$125/hr',
    jobSuccess: '99% Job Success',
    projects: '30+ projects',
    location: 'Norway',
    rating: 4.8,
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

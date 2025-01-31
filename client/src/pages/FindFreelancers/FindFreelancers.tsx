import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import FreelancerCard from "../../components/Findfreelancer/FreelanceCard.tsx";
import Freelance_Categories from "../../components/Findfreelancer/Freelance_Categories.tsx";
import FreelancerSearch from "../../components/Findfreelancer/FreelancerSearch.tsx";
import { FreelancersDummy } from "../../Constants/FreelancersDummy.ts";

export default function FindFreelancers() {
  const [visibleFreelancers, setVisibleFreelancers] = useState(3); // Start with showing 3 freelancers
  const [noMoreEntries, setNoMoreEntries] = useState(false); // To track if no more freelancers are available

  const loadMore = () => {
    if (visibleFreelancers + 3 >= FreelancersDummy.length) {
      setVisibleFreelancers(FreelancersDummy.length);
      setNoMoreEntries(true); // No more freelancers to show
    } else {
      setVisibleFreelancers((prev) => prev + 3); // Show 3 more freelancers
    }
  };

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Freelance_Categories />
      </Box>

      <Box sx={{ mb: 3 }}>
        <FreelancerSearch />
      </Box>

      <Box sx={{ p: 2 }}>
        {FreelancersDummy.slice(0, visibleFreelancers).map(
          (freelancer: any, index: number) => (
            <FreelancerCard
              key={freelancer.id || index}
              freelancer={freelancer}
            />
          )
        )}

        {!noMoreEntries ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button onClick={loadMore} variant="contained">
              More Freelancers
            </Button>
          </Box>
        ) : (
          <Typography
            sx={{ textAlign: "center", mt: 2 }}
            variant="body1"
            color="textSecondary"
          >
            No More Entries
          </Typography>
        )}
      </Box>
    </>
  );
}

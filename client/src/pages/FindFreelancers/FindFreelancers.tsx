import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import FreelancerCard from "../../components/Findfreelancer/freelancercard.tsx";
import FreelancerSearch from "../../components/Findfreelancer/freelancersearchbar.tsx";
import CategoryButtons from "../../components/Findfreelancer/freelanceCategory.tsx";

import { FreelancersDummy } from "../../Constants/FreelancersDummy.ts";

export default function FindFreelancers() {
  const [visibleFreelancers, setVisibleFreelancers] = useState(3); // Start with showing 3 freelancers
  const [noMoreEntries, setNoMoreEntries] = useState(false); // To track if no more freelancers are available

  const [FreelancersList, setFreelancersList] = useState(FreelancersDummy);

  const loadMore = () => {
    if (visibleFreelancers + 3 >= FreelancersList.length) {
      setVisibleFreelancers(FreelancersList.length);
      setNoMoreEntries(true); // If no more freelancers, show the message
    } else {
      setVisibleFreelancers((prev) => prev + 3); // Show 3 more freelancers
    }
  };

  return (
    <>
      <div>
        <CategoryButtons />
      </div>
      <div>
        <FreelancerSearch />
      </div>
      <div>
        <Box sx={{ p: 2 }}>
          {FreelancersList.slice(0, visibleFreelancers).map(
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
      </div>
    </>
  );
}

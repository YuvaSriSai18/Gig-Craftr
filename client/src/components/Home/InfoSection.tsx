import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import SearchIconForCard from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const InfoSection: React.FC = () => (
  <Card
    sx={{
      borderRadius: "15px",
      boxShadow: 3,
      minHeight: "250px",
      maxWidth: "100%",
      margin: { xs: "20px", sm: "50px" },
    }}
  >
    <CardContent sx={{ textAlign: "center", mt: 3 }}>
      <Grid container justifyContent="center" spacing={3}>
        {/* Create Account */}
        <Grid item xs={12} md={4}>
          <LockIcon sx={{ fontSize: "50px", color: "#2196f3" }} />
          <Typography
            variant="h5"
            sx={{ fontWeight: "500", marginTop: "1rem" }}
          >
            Create Account
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontSize: { xs: "16px", sm: "18px" } }}
          >
            First you have to create an account here
          </Typography>
        </Grid>
        {/* Search Work */}
        <Grid item xs={12} md={4}>
          <SearchIconForCard sx={{ fontSize: "50px", color: "#2196f3" }} />
          <Typography
            variant="h5"
            sx={{ fontWeight: "500", marginTop: "1rem" }}
          >
            Search Work
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontSize: { xs: "16px", sm: "18px" } }}
          >
            Search the best freelance work here
          </Typography>
        </Grid>
        {/* Save and Apply */}
        <Grid item xs={12} md={4}>
          <CheckCircleIcon sx={{ fontSize: "50px", color: "#2196f3" }} />
          <Typography
            variant="h5"
            sx={{ fontWeight: "500", marginTop: "1rem" }}
          >
            Save and Apply
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontSize: { xs: "16px", sm: "18px" } }}
          >
            Apply or save and start your work
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default InfoSection;

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import party from "../../assets/cheer.png";

const TextWithImage: React.FC = () => (
  <>
    <Box sx={{ textAlign: "center" }}>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={party}
            alt="Freelancers Illustration"
            sx={{ width: "100%", margin: "0 auto", display: "block" }}
          />
        </Grid>
        {/* Text Section */}
        <Grid item xs={12} md={6} textAlign={"right"}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: "56px",
              marginRight: "2rem",
              textAlign: { xs: "center", md: "right" },
            }}
          >
            Find The Best{" "}
            <Typography
              component="span"
              sx={{ color: "#2196f3", fontWeight: "bold", fontSize: "56px" }}
            >
              Freelancers
            </Typography>{" "}
            Here
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{
              maxWidth: "900px",
              margin: "1rem auto",
              fontSize: "24px",
              marginRight: "2rem",
              textAlign: { xs: "right" },
            }}
          >
            Discover the best freelancers for your project with ease. Our
            platform connects you with top talent across various industries,
            ensuring high-quality work delivered on time. Whether you need a
            creative professional, technical expert, or business consultant,
            find skilled freelancers ready to bring your vision to life. Start
            your journey with us and experience hassle-free hiring today!
          </Typography>
        </Grid>
      </Grid>
    </Box>

    {/* <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "column", md: "row" }}
    >
      <Box
        component="img"
        src={party}
        alt="Freelancers Illustration"
        sx={{width:{xs:'100%',sm:'100%',md:'50%'}}}
      />
      <Box sx={{float:'right'}}>
        <Box sx={{marginRight:'auto'}}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: "45px",
              marginRight: "2rem",
              textAlign: { xs: "right", md: "right" },
            }}
          >
            Find The Best{" "} <br />
            <Typography
              component="span"
              sx={{ color: "#2196f3", fontWeight: "bold", fontSize: "56px" }}
            >
              Freelancers <br />
            </Typography>{" "}
            Here
          </Typography>
        </Box>
      </Box>
    </Box> */}
  </>
);

export default TextWithImage;

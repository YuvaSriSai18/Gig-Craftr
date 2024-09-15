import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../../assets/gigcrftr.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff", // Set background to white
        width: "100%", // Full width
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              textAlign: "center", // Center the text
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" sx={{ color: "black" }}>
              <Box component="img" sx={{ width: 280 }} src={logo}></Box>
            </Typography>
            <Typography sx={{ color: "black" }}>
              Powerful Freelance Marketplace
            </Typography>
            <Typography sx={{ color: "black" }}>
              System with ability to change the Users (Freelancers & Clients)
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <IconButton aria-label="Instagram">
                <InstagramIcon sx={{ color: "black" }} />
              </IconButton>
              <IconButton aria-label="Twitter">
                <TwitterIcon sx={{ color: "black" }} />
              </IconButton>
              <IconButton aria-label="Facebook">
                <FacebookIcon sx={{ color: "black" }} />
              </IconButton>
            </Box>
          </Grid>

          <Grid
            item
            xs={6}
            md={2}
            sx={{
              textAlign: "center", // Center the text
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" sx={{ color: "black", marginBottom: 2, fontWeight: 'bold' }}>
              For Clients
            </Typography>
            <Link href="#" sx={{ color: "black", display: "block", textDecoration: 'none' }}>
              Find Freelancers
            </Link>
            <Link href="#" sx={{ color: "black", display: "block", textDecoration: 'none' }}>
              Post Project
            </Link>
            <Link href="#" sx={{ color: "black", display: "block", textDecoration: 'none' }}>
              Refund Policy
            </Link>
            <Link href="#" sx={{ color: "black", display: "block", textDecoration: 'none' }}>
              Privacy Policy
            </Link>
          </Grid>

          <Grid
            item
            xs={6}
            md={2}
            sx={{
              textAlign: "center", // Center the text
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" sx={{ color: "black", fontWeight: 'bold', marginBottom: 2 }}>
              For Freelancers
            </Typography>
            <Link href="#" sx={{ color: "black", display: "block", textDecoration: 'none' }}>
              Find Work
            </Link>
            <Link href="#" sx={{ color: "black", display: "block", textDecoration: 'none' }}>
              Create Account
            </Link>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              textAlign: "center", // Center the text
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" sx={{ color: "black", marginBottom: 2 , fontWeight: 'bold'}}>
              Call Us
            </Typography>
            <Typography sx={{ color: "black" }}>India</Typography>
            <Link
              href="tel:+10000000000"
              sx={{ color: "black", display: "block", textDecoration: 'none' }}
            >
              <IconButton aria-label="Phone">
                <PhoneIcon sx={{ color: "black" }} />
              </IconButton>
              +10000000000
            </Link>
            <Link
              href="mailto:freelancing@gmail.com"
              sx={{ color: "black", display: "block", textDecoration: 'none' }}
            >
              <IconButton aria-label="Email">
                <EmailIcon sx={{ color: "black" }} />
              </IconButton>
              freelancing@gmail.com
            </Link>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          align="center"
          mt={2}
          sx={{ color: "black" }}
        >
          Copyright © 2024 GigCraftr. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

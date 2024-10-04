import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../assets/gigcrftr.png";
import { Link, useLocation } from "react-router-dom";
import Modal from "@mui/material/Modal";
import SignInSignUp from "../Authentication/SignIn";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const navItems = [
  { name: "Home", path: "/" },
  { name: "Find Work", path: "/find-work" },
  { name: "Find Freelancers", path: "/find-freelancer" },
];

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "100%",
    sm: 650,
  },
  bgcolor: "transparent",
  boxShadow: 48,
  borderRadius: 3,
  p: 4,
};

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false); // State for modal

  const location = useLocation(); // Get current location

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleModalOpen = () => setOpen(true); // Open modal
  const handleModalClose = () => setOpen(false); // Close modal

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to={"/"}>
          <Box
            component={"img"}
            src={logo}
            sx={{
              width: "380px",
              margin: "0",
              cursor: "pointer",
            }}
          />
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <Link to={item.path}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box display={"flex"} flexDirection={"column"} mt={2}>
        <Link to={"/post-project"}>
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: "#1d7fda",
              padding: "8px 12px",
              borderRadius: "20px",
              color: "#fff",
              margin: "0px 30px",
            }}
          >
            Post a Project
          </Button>
        </Link>
        <Button
          onClick={handleModalOpen} // Open modal on click
          sx={{
            color: "#5e5b5b",
            fontSize: "16px",
            marginRight: "10px",
            textTransform: "none",
            fontWeight: "300",
            marginTop: 2,
            textDecoration: "underline",
          }}
          disableRipple
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ maxWidth: { xs: "98%", sm: "99%" } }}>
      <CssBaseline />
      <AppBar
        component="div"
        position="static"
        sx={{
          width: "100%",
          height: { xs: "60px", sm: "65px" },
          margin: "20px 8px 0px 8px",
          borderRadius: "30px",
          backgroundColor: "#fff",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, ml: 0.5 }}
          >
            <MenuRoundedIcon sx={{ fontSize: "28px" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to={"/"}>
              <Box
                component={"img"}
                src={logo}
                sx={{
                  width: "230px",
                  cursor: "pointer",
                }}
              />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  color:
                    location.pathname === item.path ? "#1d7fda" : "#5e5b5b",
                  fontWeight: location.pathname === item.path ? "bold" : 400,
                  fontSize: { sm: "12px", md: "16px" },
                  marginRight: "10px",
                  position: "relative",
                  overflow: "hidden",
                  textTransform: "none",
                }}
                disableRipple
              >
                {item.name}
              </Button>
            ))}
            <Link to={"/post-project"}>
              <Button
                sx={{
                  textTransform: "none",
                  backgroundColor: "#1d7fda",
                  padding: "8px 12px",
                  borderRadius: "20px",
                  color: "#fff",
                  marginRight: "10px",
                  fontSize: { sm: "12px", md: "16px" },
                }}
              >
                Post a Project
              </Button>
            </Link>
            <Button
              onClick={handleModalOpen} // Open modal on click
              sx={{
                color: "#5e5b5b",
                fontSize: { sm: "12px", md: "16px" },
                marginRight: "10px",
                textTransform: "none",
                fontWeight: "400",
              }}
              disableRipple
            >
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <Box sx={modalStyle}>
          <SignInSignUp />
        </Box>
      </Modal>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

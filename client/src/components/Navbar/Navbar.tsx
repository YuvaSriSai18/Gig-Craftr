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
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import logo from "../../assets/gigcrftr.png";
import { Link } from "react-router-dom";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Find Work",
    path: "/find-work",
  },
  {
    name: "Find Freelancers",
    path: "/find-freelancer",
  },
];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box display={"flex"} flexDirection={"column"} mt={2}>
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
        <Button
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
    <Box sx={{ display: "flex", maxWidth: { xs: "98%", sm: "99%" } }}>
      <CssBaseline />
      <AppBar
        component="div"
        position="static"
        sx={{
          width: "100%",
          height: "60px",
          margin: "20px 10px",
          borderRadius: "30px",
          backgroundColor: "#fff",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
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
                  color: "#5e5b5b",
                  fontWeight: 300,
                  fontSize: "16px",
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
                  fontSize: "14px",
                }}
              >
                Post a Project
              </Button>
            </Link>
            <Link to={"/log-in"}>
              <Button
                sx={{
                  color: "#5e5b5b",
                  fontSize: "16px",
                  marginRight: "10px",
                  textTransform: "none",
                  fontWeight: "300",
                }}
                disableRipple
              >
                Sign In
              </Button>
            </Link>
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

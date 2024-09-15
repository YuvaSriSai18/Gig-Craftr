import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Menu,
  Divider,
  Drawer,
  IconButton,
  Tooltip,
  Avatar,
  MenuItem,
  Toolbar,
  Button,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Box,
  CssBaseline,
} from "@mui/material";
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

const settings = [
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Profile 2",
    path: "/find-work",
  },
  {
    name: "Profile 3",
    path: "/find-freelancer",
  },
];
export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
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
        <Link to={"/log-in"}>
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
        </Link>
      </Box>

      {/* Avatar for mobile */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt="User Avatar"
              src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar-mobile"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {navItems.map((item, index) => (
            <MenuItem key={index} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{item.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
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
          margin: "20px 8px",
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

          {/* Desktop View Avatar */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  color: "#5e5b5b",
                  fontWeight: 400,
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
                  fontWeight: "400",
                }}
                disableRipple
              >
                Sign In
              </Button>
            </Link>

            {/* Avatar in Desktop */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="User Avatar"
                    src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((item, index) => (
                  <MenuItem key={index} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{item.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
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

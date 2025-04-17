import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  CssBaseline,
  Drawer as MuiDrawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  IconButton,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const drawerWidth = 240;

const SidebarDrawer = ({ setMymode, noneORblock, hideDrawer, draweType }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const currentLocation = useLocation();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };

  // Define menu items with correct icon components
  const myList = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Create", icon: <CreateIcon />, path: "/create" },
    { text: "Profile", icon: <Person2Icon />, path: "/profile" },
    { text: "Setting", icon: <SettingsIcon />, path: "/setting" },
  ];

  const drawer = (
    <div>
      <List>
        {/* Dark Mode Toggle */}
        <ListItem
          disablePadding
          sx={{ mb: "14px", display: "flex", justifyContent: "center" }}
        >
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              setMymode(theme.palette.mode === "dark" ? "light" : "dark");
            }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </ListItem>

        <Divider />

        {myList.map((item) => (
          <ListItem
            key={item.text}
            sx={{
              backgroundColor:
                currentLocation.pathname === item.path
                  ? theme.palette.secondary.main
                  : null,
            }}
            disablePadding
          >
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider />

        
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <MuiDrawer
        anchor="left"
        variant="temporary"
        open={mobileOpen}
        onClose={handleCloseDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </MuiDrawer>

      
      <MuiDrawer
        anchor="left"
        variant={draweType}
        open={handleDrawerToggle} 
        onClose={hideDrawer}
        sx={{
          display: { xs: noneORblock, sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </MuiDrawer>

      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        onClick={handleCloseDrawer}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};

export default SidebarDrawer;

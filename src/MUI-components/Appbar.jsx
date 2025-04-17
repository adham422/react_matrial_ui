import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Avatar, Link, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import imgavatar from "../images/img2.jpeg";


const drawerWidth = 240;

const Appbar = ({showDrawer}) => {
 
  return (
      <AppBar
        position="fixed"
        sx={{
          
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: {xs:'0', sm: `${drawerWidth}px`},
          display:'flex',flexWrap:'wrap'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={()=>{
              showDrawer()
              
            }}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
            
          </IconButton>
          
          
       
          <Link
            color="inherit"
            href="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              "&:hover": { fontSize: 16.5 },
            }}
          >
            My Expenses
          </Link>
          <Typography variant="body1" color="inherit" sx={{ mr: "10px" }}>
            Adham Hashem
          </Typography>
          <Avatar alt="Profile Image" src={imgavatar} />
        </Toolbar>
      </AppBar>
  )
}

export default Appbar

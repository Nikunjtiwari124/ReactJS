import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";
import Cart from "../Cart/cart";
import { useHistory } from 'react-router-dom';
import { ROUTE_LOGIN,ROUTE_PROFILE } from '../../routes/allNavigationRoutes';

const drawerWidth = 280;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const settings = ["Profile","Logout"];

export default function PersistentDrawerLeft(props) {

  const history = useHistory();
  const count = useSelector((state) => state.todos.count);
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    props.onChildClick(true);
  };

  return (

      <AppBar
      position="fixed"
      open={open}
      style={{ background: "transparent !important",backgroundColor: "#fff",
       color: "#000" }}
      >
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart onCartClose={() => setCartOpen(false)} />
      </Drawer>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon style={{ fill: '#000' }}/>
        </IconButton>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", md: "none" } }}
         >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
          <Search >
            <SearchIconWrapper>
              <SearchIcon  style={{ fill: '#000' }}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
             
            />
          </Search>
        </Box>

        <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            //style={{ marginRight: 10 }}
            onClick={() => setCartOpen(true)}
          >
            <Badge badgeContent={count} color="error">
              <AddShoppingCartIcon  style={{ fill: '#000' }}/>
            </Badge>
          </IconButton>
          {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              style={{marginRight:10}}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}

          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseNavMenu}>
                { setting=="Logout" ?
                   <Typography textAlign="center" onClick={()=>{history.push(ROUTE_LOGIN)}}>{setting}</Typography>
                :  [ setting=="Profile" ? <Typography onClick={()=>{history.push(ROUTE_PROFILE)}} textAlign="center" >{setting}</Typography>:''] }
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>

      <Footer />
    </AppBar>
  );
}

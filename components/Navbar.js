import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "next/link";

// import Profile from "./pages/Profile";
import { deepOrange, deepPurple } from "@mui/material/colors";
import styles from "../styles/Home.module.css";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useToasts } from "react-toast-notifications";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Router from "next/router";
import { styled, alpha } from "@mui/material/styles";

const pages = ["Home", "Self-Learning", "Contact", "News", "ScreenShot"];
const settings = ["Profile", "Dashboard"];
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLogged, setisLogged] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { addToast } = useToasts();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log(localStorage.getItem("tokenGoogle"));
    checkStorage();
    return () => {};
  }, [isLogged]);
  function checkStorage() {
    // if (localStorage.getItem("token") || localStorage.getItem("tokenGoogle")) {
    if (localStorage.getItem("token")) {
      setisLogged(true);
    } else {
      setisLogged(false);
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    // localStorage.removeItem("tokenGoogle");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("id");

    setisLogged(false);
    addToast("LogOut Successfully", { appearance: "success" });
    Router.push("/");
  };

  const startTimer = () => {
    console.log("start timer");
    setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    console.log("stop timer");
    clearInterval(setSeconds(0));
    document.querySelector("#counter").remove();
  };

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

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const currentCount = seconds;
  return (
    <div className={styles.maxx}>
      <AppBar style={{ background: "black" }} position="static">
        <Container className={styles.headerColor} maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Link href="/">
                <a style={{ width: "156px" }}>Home</a>
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page === "Self-Learning" ? (
                    <a href="../SelfLearning">Self-Learning</a>
                  ) : page === "Contact" ? (
                    <a href="../Contact">Contact</a>
                  ) : page === "News" ? (
                    <a href="../News">News</a>
                  ) : page === "Home" ? (
                    <a href="/">Home</a>
                  ) : isLogged == true ? (
                    <a href="/Message">Message</a>
                  ) : (
                    ""
                  )}
                </Button>
              ))}
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            &nbsp; &nbsp; &nbsp;
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="">
                {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton> */}
                <Typography color="inherit" style={{ marginLeft: "0em" }}>
                  {!isLogged ? (
                    <Button color="inherit">
                      <a href="/Login">Login</a>
                    </Button>
                  ) : (
                    <React.Fragment>
                      <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="">
                          <IconButton
                            onClick={handleOpenUserMenu}
                            sx={{ p: 0 }}
                          >
                            <Avatar
                              sx={{ bgcolor: deepOrange[500] }}
                              alt={localStorage.getItem("firstName")}
                              src="v"
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
                          {settings.map((setting) => (
                            <MenuItem
                              key={setting}
                              onClick={handleCloseUserMenu}
                            >
                              <Typography textAlign="center">
                                <Link
                                  href={
                                    setting === "Profile"
                                      ? "/Profile"
                                      : setting === "Dashboard"
                                      ? "/Dashboard"
                                      : "notfound"
                                  }
                                >
                                  {setting}
                                </Link>
                              </Typography>
                            </MenuItem>
                          ))}
                        </Menu>

                        <Button onClick={logout} color="inherit">
                          <a className={styles.logoutb}> Logout</a>
                        </Button>
                      </Box>
                    </React.Fragment>
                  )}
                </Typography>
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
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default ResponsiveAppBar;

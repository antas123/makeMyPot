import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { pageToRoute } from "../../constants/NavigationData";

const pages = ["Home", "Your financials", "Financial dashboard"];
const settings = ["Profile", "Logout"];

const Navbar = ({ activePage, updateActivePage, updateTabOption }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const handleUpdatePageAndTab = (page) => {
    if (page === activePage) {
      updateTabOption();
    } else {
      updateActivePage(page);
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        justifyContent: "space-around",
        boxShadow: "none",
        borderBottom: "1px solid orange",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "orange" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: "lighter",
              display: { xs: "none", md: "flex" },
              color: "#75B79E",
              textDecoration: "none",
            }}
          >
            MAKEMYPOT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
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
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor: activePage === page ? "orange" : "white",
                    padding: "5px",
                    opacity: 0.65,
                  }}
                >
                  <Typography
                    textAlign="center"
                    onClick={() => handleUpdatePageAndTab(page)}
                  >
                    <Link
                      to={`/${pageToRoute(page)}${page === "Home" ? "" : "/1"}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "16px",
                      }}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "orange" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "black",
              textDecoration: "none",
            }}
          >
            MAKEMYPOT
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              letterSpacing: 0.2,
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  "&:hover": {
                    backgroundColor: "white", // Set the desired color for hover
                  },
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    backgroundColor: activePage === page ? "orange" : "white",
                    padding: "5px",
                    opacity: 0.75,
                  }}
                  onClick={() => handleUpdatePageAndTab(page)}
                >
                  <Link
                    to={`/${pageToRoute(page)}${page === "Home" ? "" : "/1"}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "16px",
                    }}
                  >
                    {page}
                  </Link>
                </Typography>
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PermIdentityIcon
                  style={{
                    border: "2px solid orange",
                    borderColor: "orange",
                    borderRadius: "10%",
                  }}
                />
                <Typography variant="h6" sx={{ ml: 2, display: "block" }}>
                  {" "}
                  Antas Sachan{" "}
                </Typography>
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

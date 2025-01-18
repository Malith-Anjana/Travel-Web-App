import { useState } from "react";
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
import { Link } from "react-router-dom";
import colorPalette from "../theme/colorPalette";
import logo from "../assets/images/logo.png";
import { Container } from "@mui/material";
interface Props {
  window?: () => Window;
}
const drawerWidth = 240;
const navItems = ["Holidays & Tours", "Success Stories", "About us", "FAQ"];

const NavBar = ({ window }: Props) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box component="div" my={2} sx={{ height: "25px" }}>
        <img src={logo} style={{ height: "inherit" }} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} sx={{ textTransform: "none" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar disableGutters>
          <Container disableGutters maxWidth="xl">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Box component="div" sx={{ height: "25px" }}>
                <img src={logo} style={{ height: "inherit" }} />
              </Box>

              <Box
                sx={{
                  display: { xs: "none", lg: "block" },
                  justifyContent: "center",
                }}
              >
                {navItems.map((item) => (
                  <Link
                    to="/item"
                    key={item}
                    style={{
                      textDecoration: "none",
                      padding: 20,
                      color: colorPalette.text.secondary,
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  height: "100%",
                }}
              >
                <Button
                  color="primary"
                  sx={{
                    paddingY: { xs: 0.5, lg: 1.5 },
                    paddingX: { xs: 1.5, lg: 4 },
                  }}
                >
                  Get a Quote
                </Button>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <Typography
                    ml={2}
                    variant="body1"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      display: { xs: "none", lg: "block" },
                    }}
                  >
                    {" "}
                    24/7 Support
                  </Typography>
                </Link>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  disableRipple
                  sx={{
                    display: { lg: "none" },
                    padding: 2,
                    marginLeft: { xs: "auto", lg: 0 },
                    color: colorPalette.text.primary,
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            marginLeft: { xs: "auto", lg: 0 },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default NavBar;

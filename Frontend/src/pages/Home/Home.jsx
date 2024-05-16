import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SensorsIcon from "@mui/icons-material/Sensors";
import HistoryIcon from "@mui/icons-material/History";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Home.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Home = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("Dashboard");
  const [user, setUser] = React.useState("මෝඩ Gimhan");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="toolbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap component="div" id="Heading">
            <div>Green</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div
              className="userIconName"
            >
              <AccountCircleIcon
                style={{ fontSize: "2.5rem", marginLeft: "10px" }}
              />
              <p style={{ fontSize: "1.5rem", marginLeft: "10px" }}>{user}</p>
            </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="drawerHeader">
          <h3 style={{ color: "white", width: "100%" }}>Menu</h3>
          <IconButton onClick={handleDrawerClose} style={{ color: "white" }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="navList">
          <ListItem
            disablePadding
            sx={{
              display: "block",
              backgroundColor: selectedItem === "Dashboard" ? "#14b82d" : "",
            }}
            onClick={() => setSelectedItem("Dashboard")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {" "}
                <DashboardIcon className="listIcon" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <p className="listItemText">Dashboard</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              backgroundColor: selectedItem === "Sensor list" ? "#14b82d" : "",
            }}
            onClick={() => setSelectedItem("Sensor list")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {" "}
                <SensorsIcon className="listIcon" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <p className="listItemText">Sensor list</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              groundColor: selectedItem === "History" ? "#14b82d" : "",
            }}
            onClick={() => setSelectedItem("History")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {" "}
                <HistoryIcon className="listIcon" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <p className="listItemText">History</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              backgroundColor: selectedItem === "Alerts" ? "#14b82d" : "",
            }}
            onClick={() => setSelectedItem("Alerts")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {" "}
                <AddAlertIcon className="listIcon" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <p className="listItemText">Alerts</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              backgroundColor: selectedItem === "Profile" ? "#14b82d" : "",
            }}
            onClick={() => setSelectedItem("Profile")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {" "}
                <AccountCircleIcon className="listIcon" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <p className="listItemText">Profile</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Guys Import components to here 😊
          <br />
          -msg from Bimindu-
        </Typography>
        <Typography paragraph>Guys Import components to here 😊</Typography>
      </Box>
    </Box>
  );
};

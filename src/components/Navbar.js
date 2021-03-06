import React, { useState } from "react";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSloder from "@material-ui/core/Drawer"
import avatar from "../images/pic.jpg";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";



///CSS STYLES

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath:"/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath:"/resume"
  },

  {
    listIcon: <Apps />,
    listText: "Projects",
    listPath:"/projects"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath:"/contact"
  },
];

function Navbar() {
  const [state, setstate] = useState({
    right: false,
  });
  
  const toggeleSlider = (slider, open) => () => {
    setstate({ ...state, [slider]: open });
  };

  const classes = useStyles();
  const sideList = (slider) => (
    <Box
     className={classes.menuSliderContainer} component="div"
     onClick={toggeleSlider(slider,false)}
     >
      <Avatar className={classes.avatar} src={avatar} alt="pic" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggeleSlider('right',true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <MobileRightMenuSloder 
            anchor="right"
            open={state.right}
            onClose={toggeleSlider('right',false)}
            >

            {sideList('right')}
            <Footer/>
            </MobileRightMenuSloder>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
export default Navbar;

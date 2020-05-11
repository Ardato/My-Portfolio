import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  BottomNavigation,
  Button,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";


const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigation-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
   
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <Button className={classes.root} style={{ padding: 0 }}>
        <a href="https://il.linkedin.com/in/ardato-belay-141606194">
          <LinkedInIcon />
        </a>
      </Button>
      <Button className={classes.root} style={{ padding: 0 }}>
        <a href="https://github.com/Ardato?tab=overview&from=2020-03-01&to=2020-03-31">
          <GitHubIcon />
        </a>
      </Button>
      <Button className={classes.root} style={{ padding: 0 }}>
        <a href="mailto:adato22345@gmail.com">
          <EmailIcon />
        </a>
      </Button>
    </BottomNavigation>
  );
}

export default Footer;

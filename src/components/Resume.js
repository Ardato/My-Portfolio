import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      // right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      left: "calc(50%-1px)",
      right: "auto",
    },
  },

  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "$:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "0.625rem",
      top: "calc(50%-50px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.65rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n):before": {
        //right: "auto",
        right: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },

  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 ",
    "&:bofore": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },

  heading: {
    color: "tomato",
    padding: "3rem",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Resume
        </Typography>
        <Box component="div" className={classes.timeLine} align="center">
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2014/17
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" align="left" className={classes.subHeading}>
            MILITARY SERVICE
          </Typography>

          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subHeading}
            style={{ color: "tan" }}
          >
            Air Force Sergeant in a counter-air defense unit Executed military
            protocols tactically and with precision. Gained enhanced emergency
            preparedness training and skillset.
          </Typography>
        </Box>
        {/* working experience */}
        <Box component="div" className={classes.timeLine} align="center">
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018/19
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" align="left" className={classes.subHeading}>
             WORKINK EXPERIENCED
          </Typography>

          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subHeading}
            style={{ color: "tan" }}
          >
            Security guard at the Israel Aerospace Industries at Ben-Gurion
            Airport.
          </Typography>
        </Box>

        {/* PROFESSIONAL PROFILE */}
        <Box component="div" className={classes.timeLine} align="center">
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019/20
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" align="left" className={classes.subHeading}>
            PROFESSIONAL PROFILE
          </Typography>

          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subHeading}
            style={{ color: "tan" }}
          >
            Full Stack Web Developer, building dynamic and responsive single
            page applications using JavaScript, HTML5, CSS3 with React, on the
            Client-side <br></br>
            and NodeJS on the Server-side, with MongoDB .<br></br>
            Experienced with Node.js, Express.js, React, JavaScript , MongoDB,
            jQuery, Bootstrap 4,and Material-ui. <br></br>
            Quick learner, team player with excellent collaboration skills and
            open minded to learn and adopt new technologies
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Resume;

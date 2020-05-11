import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import project1 from "../images/p1.png";
import project2 from "../images/p2.png";
import project3 from "../images/p3.png";
import project4 from "../images/p4.png";
import project5 from "../images/p5.png";
import project6 from "../images/p6.png";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    //margin: "3rem",
    margin: "5rem auto",
  },
});

function Porojects() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Poroject 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  The Book Shelf
                </Typography>
                <Typography variant="body2" color="textSecondary" componenr="p">
                   Built Using React,NodeJs and MongoDB 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://the-book-shelf-project.herokuapp.com/">
                  Live Demo
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Poroject 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                   Weather App
                </Typography>
                <Typography variant="body2" color="textSecondary" componenr="p">
                 Built Using  React JS
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://ardato.github.io/weather-app-react/">
                  Live Demo
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Poroject 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Exspense Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" componenr="p">
                Built Using React Hooks and Context Api
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://ardato.github.io/expense-tracker-react/">
                  Live Demo{" "}
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Poroject 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                 COVID-19 Tracker App
                </Typography>
                <Typography variant="body2" color="textSecondary" componenr="p">
                  Built Using React Hooks and Material Ui 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://limitless-garden-72412.herokuapp.com/">
                  Live Demo
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Poroject 5 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 5"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Todo List
                </Typography>
                <Typography variant="body2" color="textSecondary" componenr="p">
                  Built Using JS and  Bootstrap 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://loving-keller-25deb2.netlify.app">
                  Live Demo
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>



        {/* Poroject 6*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 6"
                height="140"
                image={project6}
                  
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Microsoft Homepage
                </Typography>
                <Typography variant="body2" color="textSecondary" componenr="p">
                   Built Using html and css
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://objective-rosalind-875ef9.netlify.app">
                  Live Demo
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Porojects;

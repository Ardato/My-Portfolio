import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import The_Book_Shelf from "../images/The_Book_Shelf.png";
import  Weather_App from "../images/Weather_App.png";
import Exspense_Tracker from "../images/Exspense_Tracker.png";
import  COVID_19 from "../images/COVID_19.png";
import Todo_List from "../images/Todo_List.png";
import Microsoft_Homepage from "../images/Microsoft_Homepage.png";
import taskManage from "../images/taskManage.png";
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
                image={The_Book_Shelf}
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
              <Button>
                <a href="https://github.com/Avshalom-Mogos/the-book-shelf-MERN">
                  github
                </a>
              </Button>
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
                image={Weather_App}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Weather App
                </Typography>
                <Typography variant="body2" color="textSecondary" componenr="p">
                  Built Using React JS
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button>
                <a href="https://github.com/Ardato/weather-app-react">github</a>
              </Button>
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
                image={Exspense_Tracker}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Expense Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" componenr="p">
                  Built Using React Hooks and Context Api
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button>  <a href="https://github.com/Ardato/expense-tracker-react">github</a> </Button>
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
                image={COVID_19}
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
              <Button><a href="https://github.com/Ardato/COVID-19-Tracker-Application">github</a></Button>
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
                image={Todo_List}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Todo List
                </Typography>
                <Typography variant="body2" color="textSecondary" componenr="p">
                  Built Using JS and Bootstrap
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button><a href="https://github.com/Ardato/To-do-list"> github</a> </Button>
              <Button size="small" color="primary">
                <a href="https://loving-keller-25deb2.netlify.app">Live Demo</a>
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
                image={Microsoft_Homepage}
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
              <Button><a href="https://github.com/Ardato/Microsoft-Homepage">github</a></Button>
              <Button size="small" color="primary">
                <a href="https://objective-rosalind-875ef9.netlify.app">
                  Live Demo
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>





         {/* Poroject 7*/}
         <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 7"
                height="140"
                image={taskManage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                 Task Manager
                </Typography>
                <Typography variant="body2" color="textSecondary" componenr="p">
                Built Using Context Api and React Hooks and browser local storage
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button><a href="https://github.com/Ardato/TaskManager">github</a></Button>
              <Button size="small" color="primary">
                <a href="https://ardato.github.io/TaskManager/">
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

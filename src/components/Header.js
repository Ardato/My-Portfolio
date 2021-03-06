import React from 'react'
import {Typography,Avatar,Grid,Box} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/pic.jpg";
import Typed from "react-typed";
////CSS STYLES

const useStyles = makeStyles((theme) => ({
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      margin: theme.spacing(15),
    },
    title:{
        color:"tomato"
    },
    subtitle:{
        color:"tan",
        marginBottom:"3rem"
    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        width:"100vh",
        textAlign:"center",
        zIndex:1
    }
  
  }));
  

////

function Header() {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="pic"/>

            </Grid>
            <Typography  className={classes.title} variant="h4"> 
            <Typed strings={['Ardato Belay']} typeSpeed={40} />
            </Typography >
            <br/>
            <Typography className={classes.subtitle} variant="h5"> 
            <Typed 
            strings={['Web Development','MERN Stack']} 
            typeSpeed={40}
            backSpeed={50}
            loop
            />
            </Typography>
        </Box>
    )
}
export default Header;

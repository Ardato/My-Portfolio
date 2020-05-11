import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box} from "@material-ui/core"
import Navbar from './Navbar';

const useStyles = makeStyles({
    Container:{
        textAlign:"center",
        color:"white",
       
    },
   
})



function Contact() {
    const classes = useStyles();
    return (
        <>
        <Navbar/>
        <Box  className={classes.Container} component="div"> 
            <h1>Contact <span className="contact">Me</span></h1>
            <h2>This is how you can reach me...</h2>
         <div className="boxes">
      <div>
        <span className="contact">Email: </span> adato22345@gmail.com
      </div>
      <div>
        <span className="contact">Phone: </span> (054) 4329622
      </div>
      <div>
        <span className="contact">Address: </span> Rishon Lezion
      </div>
    </div>
         </Box>
        </>
    )
}

export default Contact

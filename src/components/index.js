import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    opacity:0.3
  },
});


function Home() {
    const classes = useStyles()
  return (
    <>
      <Navbar />
      <Header />
      <Particles
      canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density:{
                  enable:true,
                  value_area:900
              }
            },
            shape:{
                type:"star",
                stroke:{
                    width:1,
                    color:'tomato'
                }
            },
            size:{
                value:8,
                random:true,
                animation:{
                    enable:true,
                    speed:6,
                    size_min:0.2,
                    sync:true
                }
            },
            opacity:{
                value:1,
                rnadom:true,
                animation:{
                    enable:true,
                    speen:1,
                    opacity_min:0.1,
                    sync:true  
                }
            }
          },
        }}
      />
    </>
  );
}
export default Home;

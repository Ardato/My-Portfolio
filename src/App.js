import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Route} from "react-router-dom";
import './App.css';
import Home from './components';
import Resume from './components/Resume';
import Porojects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <>
   <CssBaseline/>
   <Route exact path="/" component={Home}/>
   <Route path="/resume" component={Resume}/>
   <Route path="/projects" component={Porojects}/>
   <Route path="/contact" component={Contact}/>
   </>
  );
}

export default App;

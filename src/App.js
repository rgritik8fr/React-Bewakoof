import React, { Component } from 'react'
import Nav from './component/navbar/Nav'
import{Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
    <>
    <Nav/>

    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/About" element={<About/>}/>
     
    </Routes>

    </>
    )
  }
}

export default App

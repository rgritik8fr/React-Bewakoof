import React, { Component } from "react";
import Nav from "./component/navbar/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./component/Footer/Footer";

import Error from "./pages/Not_found/Error";
import Login from "./pages/Account/Login/Login";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Nav />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </>
    );
  }
}

export default App;

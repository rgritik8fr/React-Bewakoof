import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let topLeft = [
      [
        { id: 1, Name: "offer" },
        { id: 2, Name: "fanbook" },
        { id: 3, Name: "Downlode App" },
        { id: 4, Name: "Tribe Membership" },
      ],
      [{ Name: "Contact us" }, { Name: "Track Order" }],
    ];

    let mainNav = [
      { id: 1, Name: "Men" },
      { id: 2, Name: "WoMen" },
      { id: 3, Name: "Mobile cover" },
    ];

    return (
      <>
        <nav className="container-fluid">
          <div className="top-section">
            <div className="container">
              <div className="row pt-3 ">
                <div className="col-md-6">
                  <ul className="d-flex justify-content-start text-capitalize ">
                    {topLeft[0].map((el) => (
                      <Link to={el.Name} key={el.name}>
                        {" "}
                        <li className="list-group mx-3" key={el.name}>
                          {el.Name}
                        </li>{" "}
                      </Link>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="d-flex text-capitalize justify-content-end">
                    {topLeft[1].map((el) => (
                      <Link to={el.Name}>
                        {" "}
                        <li className="list-group mx-3" key={el.id}>
                          {el.Name}
                        </li>{" "}
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="container-fluid bg-light border-bottom border-2 border-secondary">
              <div className="container">
                <div className="row navline ">
                  <div className="col-7">
                    <nav className="navbar navbar-expand-lg navbar-light">
                      <div className="container">
                        <Link to="" className="navbar-brand ms-3">
                          {" "}
                          <img
                            src="./Assest/bewakoof-primary-logo-white-bg-2x-1635745564.png"
                            alt=""
                          />
                        </Link>
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarNav"
                          aria-controls="navbarNav"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                          className="collapse navbar-collapse"
                          id="navbarNav"
                        >
                          <ul className="navbar-nav  ">
                            {mainNav.map((el) => (
                              <li className="nav-item pt-2" key={el.id}>
                                <Link
                                  to={el.Name}
                                  className="nav-link active text-capitalize ms-2"
                                >
                                  {el.Name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="col-5">
                    <div className="row">
                      <div className="col-8">
                        <SearchBar value="usericon" />
                      </div>
                      <div className="col-4">
                        <div className="login">
                          <Link to="/login">
                            <p className="text-dark">Login</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;

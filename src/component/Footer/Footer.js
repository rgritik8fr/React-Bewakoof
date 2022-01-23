import React, { Component } from "react";
import { FooterLink } from "../../Global/Links";
import { Link } from "react-router-dom";
import "./Footer.css";

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <footer className="bg-dark">
          <div className="container py-5">
            <div className="row  py-5">
              <div className="col-3">
                <h6 className="text-warning footer-font">CUSTOMER SERVICE</h6>
                <ul className="px-0  pt-3">
                  {FooterLink[0].map((Links) => (
                    <Link to={Links.name}>
                      <li
                        key={Links.id}
                        className="text-white pt-2 text-capitalize footer-font"
                      >
                        {Links.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>

              <div className="col-3">
                <h6 className="text-warning footer-font text-capitalize">
                  COMPANY
                </h6>
                <ul className="px-0  pt-3">
                  {FooterLink[1].map((Links) => (
                    <Link to={Links.name}>
                      <li
                        key={Links.id}
                        className="text-white pt-2 text-capitalize footer-font"
                      >
                        {Links.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>

              <div className="col-3">
                <h6 className="text-warning footer-font">CONNECT WITH US</h6>
                <ul className="px-0  pt-3">
                  {FooterLink[2].map((Links) => (
                    <Link to={Links.name}>
                      <div className="d-flex align-middle">
                        <i
                          className={`${Links.icon} me-3 pt-3 text-white footer-font`}
                        ></i>
                        <li
                          key={Links.id}
                          className="text-white pt-2 text-capitalize footer-font"
                        >
                          {Links.name}
                        </li>
                      </div>
                    </Link>
                  ))}
                </ul>
              </div>

              <div className="col-3">
                <h6 className="text-warning footer-font">KEEP UP TO DATE</h6>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;

import React from "react";
import "./header.scss";
import logo from "../../../assets/images/mpwr_logo.png";
// import metamask from "../../../assets/images/metamask.png";

const Header = () => {
  return (
    <div className="header_wrp ">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand mpwr_logo" href="#">
            <img
              src={logo}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <span className="text_agov"> MPWR</span>
          </a>

          {/* <div className="meta">
            <img
              src={""}
              alt="meta_icon"
              width="50px"
              height="auto"
              className="navbar-toggler navbar-dark"
            />

            <button
              className="navbar-toggler navbar-dark"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div> */}

          <div
            className="collapse navbar-collapse about_section"
            id="navbarSupportedContent "
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Get $MPWR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Metaverse Prototype
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ClubRare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

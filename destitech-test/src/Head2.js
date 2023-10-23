import React from "react";
import "./styles/Head2.css";
import logo from "./imgs/Logo-21.png";

function Head2() {
  return (
    <div className="Head2 container text-center px-5">
      <div className="row">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand m-2" href="#">
              <img src={logo} alt="Excursion" height="47px" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    IDIOMA
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CARRINHO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    AJUDA
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    LOGIN
                  </a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-primary p-3 px-4" type="button">
                    CRIAR CONTA
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Head2;

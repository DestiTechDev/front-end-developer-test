import React from "react";
import "./styles/Center2.css";
import destination1 from "./imgs/destination1.png";
import activities1 from "./imgs/activities1.png";
import duration1 from "./imgs/duration1.png";
import budget1 from "./imgs/budget1.png";

function Center2() {
  return (
    <div className="Center2 container border">
      <div className="row m-0 d-flex justify-content-evenly m-0">
        <div className="col-md mb-2">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={destination1} className="img-fluid" />
              Destino
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" type="button">
                  Rio de Janeiro
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  São Paulo
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Salvador
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Recife
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md mb-2">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={activities1} className="img-fluid" />
              Atividade
            </button>
            <ul className="dropdown-menu"></ul>
          </div>
        </div>
        <div className="col-md mb-2">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={duration1} className="img-fluid" />
              Duração
            </button>
            <ul className="dropdown-menu"></ul>
          </div>
        </div>
        <div className="col-md  mb-2">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={budget1} className="img-fluid" />
              Consulta
            </button>
            <ul className="dropdown-menu"></ul>
          </div>
        </div>
        <div className="col-md">
          <button type="button" className="btn btn-primary">
            PESQUISAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Center2;
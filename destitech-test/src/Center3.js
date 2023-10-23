import React from "react";
import "./styles/Center3.css";
import cardImage1 from "./imgs/Rectangle22.png";
import cardImage2 from "./imgs/Rectangle24.png";
import cardImage3 from "./imgs/Rectangle26.png";
import location from "./imgs/location1.png";

function Center3() {
  return (
    <div className="Center3 container text-center">
      <div className="row">
        <p className="pacotes">NOSSOS PACOTES</p>
        <svg height="120" width="50" className="stroke">
          <g fill="none" stroke="#4688F2" strokeWidth="4">
            <path d="M5 5 l215 0" />
          </g>
          Sorry, your browser does not support inline SVG.
        </svg>
      </div>
      <div className="row justify-content-evenly">
        <div className="card col-4 p-0">
          <img src={cardImage1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Salvador - BA</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              urna tellus, tristique in mi non, volutpat molestie nibh.
            </p>
            <ul className="card-list">
              <li>Cras urna dui</li>
              <li>Scelerisque aliquam felis in</li>
              <li>Aliquet efficitur neque</li>
              <li>Proin eget rutrum mi</li>
              <li>Donec tincidunt nunc nec lorem efficitur iaculi</li>
            </ul>
          </div>
          <ul className="list-group list-group-flush d-flex">
            <div className="d-flex align-items-center">
              <img
                src={location}
                className="location-icon me-2"
                width="12px"
                height="15px"
                alt="..."
              />
              <p className="location-point m-0">Brasil</p>
            </div>
            <p className="location-price m-0">R$ 800,00</p>
          </ul>
        </div>
        <div className="card col-4 p-0">
          <img src={cardImage2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Angra dos Reis - RJ</h5>
            <p className="card-text">
              Sed condimentum justo enim, ut feugiat arcu aliquet id. Praesent
              auctor leo porta, tempus lacus sed, euismod elit. Ut tristique
              mollis massa et mattis.
            </p>
            <ul className="card-list">
              <li>Cras urna dui</li>
              <li>Scelerisque aliquam felis in</li>
              <li>Aliquet efficitur neque</li>
              <li>Proin eget rutrum mi</li>
              <li>Donec tincidunt nunc nec lorem efficitur iaculi</li>
            </ul>
          </div>
          <ul className="list-group list-group-flush d-flex">
            <div className="d-flex align-items-center">
              <img
                src={location}
                className="location-icon me-2"
                width="12px"
                height="15px"
                alt="..."
              />
              <p className="location-point m-0">Brasil</p>
            </div>
            <p className="location-price m-0">R$ 640,00</p>
          </ul>
        </div>
        <div className="card col-4 p-0">
          <img src={cardImage3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">São Paulo - SP</h5>
            <p className="card-text">
              Etiam molestie scelerisque odio, in ultrices metus venenatis a.
              Phasellus accumsan, nisl ut vulputate consectetur, sapien metus
              luctus enim, sed interdum nulla est vitae risus.
            </p>
            <ul className="card-list">
              <li>Cras urna dui</li>
              <li>Scelerisque aliquam felis in</li>
              <li>Aliquet efficitur neque</li>
              <li>Proin eget rutrum mi</li>
              <li>Donec tincidunt nunc nec lorem efficitur iaculi</li>
            </ul>
          </div>
          <ul className="list-group list-group-flush d-flex">
            <div className="d-flex align-items-center">
              <img
                src={location}
                className="location-icon me-2"
                width="12px"
                height="15px"
                alt="..."
              />
              <p className="location-point m-0">Brasil</p>
            </div>
            <p className="location-price m-0">R$ 240,00</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Center3;

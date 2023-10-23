import React from 'react';
import './styles/Head1.css';

function Head1() {
  return (
    <div className="Head1 container-fluid d-md-flex d-none justify-content-end m-0">
      <div className="row">
        <a className="col-auto" href="mailto:tour.support@gmail.com">
          tour.support@gmail.com
        </a>
        <a className="col-auto" href="#">
          Sobre nós
        </a>
        <a className="col-auto" href="#">
          Contato
        </a>
        <a className="border-0 col-auto" href="#">
          Fotos
        </a>
      </div>
    </div>
  );
}

export default Head1;
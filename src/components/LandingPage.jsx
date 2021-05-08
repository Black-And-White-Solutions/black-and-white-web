import React, { useState } from 'react';
import './styles/LandingPage.css';
import phone_showcase from '../img/phoneShowcase.png';

const LandingPage = () => {
  const [ColorChange, setColorChange] = useState(false);
  window.addEventListener('scroll', () => {
    setColorChange(window.scrollY > 0);
  });

  return (
    <>
      <div className={ColorChange ? 'section ColorChange' : 'section'}>
        <div className="container-fluid presentation">
          <div className="row pt-2">
            <div className=" col-md-7 col-xl-7">
              <h1>Confíanos tus ideas y nosotros desarrollamos la solución</h1>
              <p>
                Black & White Solutions tiene todas las herramientas que
                necesitarás para realizar tus ideas y darle una nueva dimensión
                a tu emprendimiento
              </p>
              <button type="button" className="btn btn-primary">
                Contactanos
              </button>
            </div>
            <div className=" col-md-5 col-xl-5 pt-5">
              <img src={phone_showcase} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

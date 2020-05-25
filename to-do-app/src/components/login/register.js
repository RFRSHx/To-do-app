import React, { useState, useEffect } from "react";
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context("../../login", false, /\.(svg)$/));
export function Register(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(SlideImage, 1000);
    return () => clearInterval(interval);
  }, [count]);

  function SlideImage() {
    if (count === images.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  
    return (
      <div className="base-container" ref={props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={images[count]} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Nume utilizator</label>
              <input type="text" name="username" placeholder="nume utilizator" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Parolă</label>
              <input type="password" name="password" placeholder="parolă" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="button">
            Înregistrare
          </button>
        </div>
      </div>
    );
  }


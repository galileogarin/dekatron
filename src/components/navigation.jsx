import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src="img/logo.png" className="logo" alt="Logo" />
            <span style={{ marginLeft: "10px" }}>UD Dekatron</span>
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Tentang
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Produk
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galeri
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimoni
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

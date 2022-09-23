import React from "react";

//Material UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

//assets
import Logo from "../assets/logo.png";

//Style
import "../Styles/Header.css";

function Header() {
  return (
    <>
      <AppBar position="sticky" color="default">
        <div className="header">
          <Toolbar>
            <div className="container-enlaces">
              <a href="/">
                <img src={Logo} alt="logo" className="logo" />
              </a>

              <div className="enlaces">
                <a href="/sobre-mi">Sobre Mi</a>
                <a href="/mision">Mision</a>
                <a href="/vision">Vision</a>
                <a href="/products">Catalogo</a>
                <a href="/contacto">Contacto</a>
              </div>
            </div>
          </Toolbar>
        </div>
      </AppBar>
    </>
  );
}

export default Header;

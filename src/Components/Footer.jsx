import React from "react";

//Material UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

//Style
import "../Styles/Footer.css";

function Footer() {
  return (
    <>
      <div className="container-footer">
        <AppBar position="sticky" color="default">
          <Toolbar>
            <div className="footer">
              <div className="enlaces-footer">
                <a href="https://www.instagram.com/Compas.psi/" target="BLANK_">
                  <InstagramIcon />
                </a>
                <a
                  href="https://chat.whatsapp.com/G9ed6fXtu2m1SXplVVApNt"
                  target="BLANK_"
                >
                  <WhatsAppIcon />
                </a>
                <a href="https://t.me/psi_acompa" target="BLANK_">
                  <TelegramIcon />
                </a>
              </div>

              <p>Todos los derechos reservados &copy; 2022</p>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default Footer;

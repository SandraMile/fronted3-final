import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import facebookIcon from "/images/ico-facebook.png";
import instagramIcon from "/images/ico-instagram.png";
import whatsappIcon from "/images/ico-whatsapp.png";
import tiktokIcon from "/images/ico-tiktok.png";
import logoDH from "/images/DH.png";

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <footer className={`footer ${state.theme}`}>
      <div className="footer-top">
        <p>VOLTAR PARA O TOPO</p>
      </div>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logoDH} alt="Digital House Logo" />
        </div>
        <div className="footer-icons">
          <img src={facebookIcon} alt="Facebook Icon" />
          <img src={instagramIcon} alt="Instagram Icon" />
          <img src={whatsappIcon} alt="WhatsApp Icon" />
          <img src={tiktokIcon} alt="TikTok Icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

import FooterNav from "./footerNav/FooterNav";
import "./footer.css";
import Author from "./author/Author";

const FooterContainer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-container-border">
        <div>
          <FooterNav/>
        </div>
      </div>
     <Author/>
    </footer>
  );
};

export default FooterContainer;

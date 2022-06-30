import React from "react";

import FooterNav from "./footerNav/FooterNav";
import "./footer.css";
import Author from "./author/Author";

const FooterContainer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-container-border">
        <div className="footer-nav-container">
          <FooterNav />
        </div>
        <div className="footer-1-2-row">
          <div className="footer-grid-container">
            <div className="footer-grid-item">
              <img src="https://www.digikala.com/statics/img/png/enamad.png" />
            </div>
            <div className="footer-grid-item">
              <img src="https://www.digikala.com/statics/img/png/kasbokar.png" />
            </div>
            <div className="footer-grid-item">
              <img src="https://www.digikala.com/statics/img/png/rezi.png" />
            </div>
          </div>
          <div className="footer-cafe-desc">
            <h3>درباره کافی تایم...</h3>
            <p>خوش بختیم که ثابت کرده ایم بهترین متریال  قهوه با بهترین رست و عالی ترین درجه کیفیت را به شما ارایه میدهیم.
              اعتبار ما  کیفیت ماست.
            </p>
          </div>
        </div>
      </div>
      <Author />
    </footer>
  );
};

export default FooterContainer;

import React from "react";

import {
  homePic,
  coffeBasePic,
  coldDrinksPic,
  hotDrinksPic,
  sideAccessoriesPic,
  spersoMakerPic,
} from "./../../assets/menuPics";

const TopMenu = () => {
  return (
    <div className="top-menu-container">
     
      <ul className="top-menu">
        <li className="list-item">
          <a href="#">
            <img src={homePic} />
            <div className="li-desc">
              <h3>Coffe Time</h3>
              <p>صفحه اصلی مجموعه </p>
            </div>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <img src={hotDrinksPic} />
            <div className="li-desc">
              <h3>Hot Drinks </h3>
              <p>منوی نوشیدنی های گرم </p>
            </div>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <img src={coldDrinksPic} />
            <div className="li-desc">
              <h3>Cool Drinks </h3>
              <p>منوی نوشیدنی های سرد </p>
            </div>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <img src={coffeBasePic} />
            <div className="li-desc">
              <h3>Coffe Base </h3>
              <p>منوی نوشیندنی های بر پایه قهوه </p>
            </div>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <img src={spersoMakerPic} />
            <div className="li-desc">
              <h3>Sperso Maker </h3>
              <p>دستگاه اسپرسو ساز </p>
            </div>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <img src={sideAccessoriesPic} />
            <div className="li-desc">
              <h3>Side Accessories </h3>
              <p>لوازم جانبی </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;

import React from "react";

import "./adminSiteInfo.css";

const AdminSiteInfo = () => {
  return (
    <ul className="AdminSiteInfo-container">
      <li>
        <h3>آمار بازدید سایت</h3>
        <p>25,526</p>
      </li>
      <li>
        <h3>میزان دانلود از سایت</h3>
        <p>5,526</p>
      </li>
      <li>
        <h3>فروش امروز تیم</h3>
        <p>20,256,500 تومان</p>
      </li>
    </ul>
  );
};

export default AdminSiteInfo;

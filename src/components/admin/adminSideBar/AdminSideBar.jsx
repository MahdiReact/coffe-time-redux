import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./adminSideBar.css";

const AdminSideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={
        open ? "admin-linear-sideBar side-actived" : "admin-linear-sideBar"
      }
    >
      {open ? (
        <ul className="admin-sideBar">
          <li>
            <Link to={"/admin/drinks"} className="">
              نمایش لیست نوشیدنی ها
            </Link>
          </li>
          <li>
            <Link to={"/admin/drinks"} className="">
              نمایش تیکت های دریافتی
            </Link>
          </li>
          <li>
            <Link to={"/admin/addDrink"} className="">
              اضافه کردن نوشیدنی جدید
            </Link>
          </li>
        </ul>
      ) : (
        <div className="line"></div>
      )}
      <button onClick={() => setOpen(!open)}>{open ? "<" : ">"} </button>
    </div>
  );
};

export default AdminSideBar;

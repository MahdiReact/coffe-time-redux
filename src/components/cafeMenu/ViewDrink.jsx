import React from "react";
import { useNavigate } from "react-router-dom";

import BoxBorder from "../repeatable/BoxBorder";
import Title from "../repeatable/Title";

const ViewDrink = ({ drink }) => {

  const navigate = useNavigate();
  return (
    <BoxBorder classNames="viewDrink-container">
      <Title text={drink.drinkName} color="#fff"/>
      <img src={drink.drinkImage} />
      <div className="drink-desc">
        <ul>
          <li>
            <h3>قیمت : </h3>
            <h3>{drink.price}</h3>
          </li>
          <li>
            <h3>مشخصات نوشیدنی :</h3>
            <p className="drink-details">{drink.details}</p>
          </li>
        </ul>
        <div className="ordering-btns">
        <button className="btn btn-order">سفارش</button>
        <button className="btn btn-del-order" onClick={() => {
          navigate("/")
        }} >حذف سفارش </button>
        </div>
      </div>
    </BoxBorder>
  );
};

export default ViewDrink;


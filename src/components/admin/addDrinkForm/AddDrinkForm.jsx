import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { addDrink } from "../../../services/drinks";
import AdminBox from "../../repeatable/AdminBox";
import Title from "./../../repeatable/Title";
import "./AddDrinkForm.css";

const AddDrinkForm = () => {
  const [newDrink, setNewDrink] = useState({
    drinkName: "",
    price: "",
    category: "",
    drinkImage: "",
    details: "",
    coffeBase: false,
  });

  const navigate = useNavigate();

  const handleSubmitNewDrink = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      if (
        newDrink.drinkName.length > 0 &&
        newDrink.price.length > 0 &&
        newDrink.category.length > 0 &&
        newDrink.drinkImage.length > 0 &&
        newDrink.details.length > 0
      ) {
        try {
          let { status } = await addDrink(newDrink);
          console.log(newDrink);
          if (status === 201) {
            navigate("/admin");
          }
        } catch (err) {
          console.log(err.message);
        }
      } else {
        alert("لطفا اطلاعات نوشیدنی را کامل کنید... ");
      }
    };
    fetchData();
  };
  const handleNewDrinkCB = () => {
    const init = () => {
      return !newDrink.coffeBase;
    };
    setNewDrink({ ...newDrink, coffeBase: init() });
  };
  const handleNewDrink = (event) => {
    setNewDrink({ ...newDrink, [event.target.name]: event.target.value });
  };
  return (
    <AdminBox className="addNewDrink-form-container z-index-0">
      <Title text={"اضافه کردن نوشیدنی"} color="#fff" />
      <form onSubmit={handleSubmitNewDrink} className="addNewDrink-form">
        <div className="form-item">
          اسم نوشیدنی جدید :{" "}
          <input
            type="text"
            name="drinkName"
            placeholder="اسم نوشدنی جدید"
            onChange={handleNewDrink}
          />
        </div>
        <div className="form-item">
          قیمت نوشیدنی :{" "}
          <input
            type="text"
            name="price"
            placeholder="قیمت نوشیدنی"
            onChange={handleNewDrink}
          />
        </div>
        <div className="form-item">
          نوع نوشیدنی :
          <select name="category" onChange={handleNewDrink}>
            <option value="">نوع نوشیدنی</option>
            <option value="cold">نوشیدنی سرد</option>
            <option value="hot">نوشیدنی گرم</option>
          </select>
        </div>
        <div className="form-item">
          آدرس عکس نوشیدنی :{" "}
          <input
            name="drinkImage"
            type="text"
            placeholder="آدرس url عکس"
            onChange={handleNewDrink}
          />
        </div>
        <div className="form-item">
          مشخصات نوشیدنی :{" "}
          <textarea
            placeholder="مشخصات نوشیدنی"
            onChange={handleNewDrink}
            name="details"
          />
        </div>
        <div className="form-item">
          بر اساس قهوه؟ : <input type="checkbox" onChange={handleNewDrinkCB} />
        </div>
        <button className="btn" type="submit">
          ثبت
        </button>
      </form>
      <div>
        <Link to="/admin" className="btn back-btn">
          بازگشت به پنل ادمین
        </Link>
      </div>
      <div className="addNewDrink-form-container"></div>
    </AdminBox>
  );
};

export default AddDrinkForm;

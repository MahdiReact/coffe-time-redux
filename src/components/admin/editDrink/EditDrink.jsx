import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editDrink } from "../../../services/drinks";
import AdminBox from "../../repeatable/AdminBox";
import Title from "../../repeatable/Title";

import "./editDrink.css";

const EditDrink = () => {
  const [choosenDrink, setchoosenDrink] = useState({
    drinkName: "",
    price: "",
    drinkImage: "",
    details: "",
    id: "",
    category: "",
    coffeBase: null,
  });
  const drinks = useSelector(state => state.drinks);
  const { id } = useParams();
  const navigate = useNavigate();
  const drink = drinks.find((drink) => drink.id === id);
  useEffect(() => {
    setchoosenDrink({ ...drink });
  }, []);

  const handleChangeValue = (event) => {
    setchoosenDrink({
      ...choosenDrink,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangeCB = (event) => {
    setchoosenDrink({ ...choosenDrink, coffeBase: event.target.checked });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const editDrinkInfo = async () => {
      try {
        const { status } = await editDrink(id, choosenDrink);
        if (status === 200) {
          navigate("/admin/drinks");
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    editDrinkInfo();
  };
  return (
    <AdminBox customStyle={{ width: "80%", margin: "2rem auto" }}>
      <h3 className="edit-form-title">{drink.drinkName}</h3>
      <Title text={"ویرایش نوشیدنی"} color="#fff" />
      <div className="drinkInfo-container">
        <img src={choosenDrink.drinkImage} alt={choosenDrink.drinkName} />
        <form className="editDrink-form" onSubmit={handleSubmit}>
          <div className="editDrink-form-inputs">
            <input
              type="text"
              name="drinkName"
              value={choosenDrink.drinkName}
              placeholder="اسم نوشیدنی "
              onChange={handleChangeValue}
            />
            <input
              type="text"
              name="price"
              value={choosenDrink.price}
              placeholder="قیمت نوشیدنی"
              onChange={handleChangeValue}
            />
            <select
              value={choosenDrink.category}
              name="category"
              onChange={handleChangeValue}
            >
              <option value={""}>نوع نوشیدنی</option>
            <option value="cold">نوشیدنی سرد</option>
            <option value="hot">نوشیدنی گرم</option>
            </select>
            <input
              type="text"
              name="drinkImage"
              value={choosenDrink.drinkImage}
              onChange={handleChangeValue}
            />
            <textarea
              value={choosenDrink.details}
              name="details"
              placeholder="توضیحات نوشیدنی"
              onChange={handleChangeValue}
            />
            <div className="coffeBase-edit-container">
              بر اساس قهوه است؟
              <input
                type="checkbox"
                name="coffeBase"
                checked={choosenDrink.coffeBase}
                onClick={handleChangeCB}
              />
            </div>
          </div>

          <div className="edit-drinkInfo-btns">
            <button type="submit" className="btn editing-btn">
              ویرایش
            </button>
            <Link to={"/admin/drinks"} className="btn cancel-btn">
              انصراف
            </Link>
          </div>
        </form>
      </div>
    </AdminBox>
  );
};

export default EditDrink;

import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { deleteDrink, getAllDrinks } from "../../../services/drinks";
import MenuPaginate from "../../cafeMenu/MenuPaginate";
import { Paginate } from "../../paginate/indexDrinks";

import AdminBox from "../../repeatable/AdminBox";
import Title from "../../repeatable/Title";
import "./AdminArchiveDrinks.css";

const AdminArchiveDrinks = ({ getDrinks, setDrinks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(9);

  const node = useRef(null);

  const indexedDrinks = Paginate([...getDrinks], currentPage, perPage);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: drinksArray } = await getAllDrinks();
        setDrinks(drinksArray);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [indexedDrinks]);

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };
  const activateButtons = (id) => {
    console.log(id);
    if (id !== "close") {
      node.current = getDrinks.find((drink) => drink.id === id);
      console.log(node.current);
    } else {
      node.current = null;
    }
  };

  const handleDeleteDrink = async (drinkId) => {
    try {
      const { status } = await deleteDrink(drinkId);
      if (status === 200) {
        node.current = null;
        console.log(status);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AdminBox>
      <Title text={"آرشیو نوشیدنی ها"} color="#fff" />

      {node.current !== null ? (
        <div className="archiveShowButtons-container">
          <Title text={node.current.drinkName} color="#fff" />
          <div className="archiveShowButtons">
            <Link to="/admin">ویرایش نوشیدنی</Link>
            <button
              onClick={() => {
                handleDeleteDrink(node.current.id);
              }}
            >
              حذف نوشیدنی
            </button>
            <Link
              to="/admin/drinks"
              onClick={() => {
                activateButtons("close");
              }}
            >
              انصراف
            </Link>
          </div>
        </div>
      ) : null}

      <ul className="admin-archiveDrinks">
        {indexedDrinks.map((drink) => (
          <div>
            <li
              key={drink.id}
              onClick={() => {
                activateButtons(drink.id);
              }}
            >
              <img src={drink.drinkImage} alt={drink.drinkName} />

              <div>
                <h5>نام نوشیدنی : {drink.drinkName}</h5>
                <h5>قیمت نوشیدنی : {drink.price}</h5>
                <h5>دسته بندی نوشیدنی :{drink.category}</h5>
                <h5>
                  توضیحات : <br />
                  {drink.details}
                </h5>
                <h5>بر اساس قهوه است؟ {drink.coffeBase ? "بله" : "خیر"}</h5>
              </div>
            </li>
            <div>
              <div>
                
              </div>
            </div>
          </div>
        ))}
      </ul>
    </AdminBox>
  );
};

export default AdminArchiveDrinks;

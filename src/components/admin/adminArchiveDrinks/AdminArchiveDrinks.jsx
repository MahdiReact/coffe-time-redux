import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setSortedDrinks } from "../../../configureStore/sortedDrinks";
import { deleteDrink, getAllDrinks } from "../../../services/drinks";
import MenuPaginate from "../../cafeMenu/MenuPaginate";
import { Paginate } from "../../paginate/indexDrinks";
import { useSelector, useDispatch } from "react-redux";

import AdminBox from "../../repeatable/AdminBox";
import Title from "../../repeatable/Title";
import "./AdminArchiveDrinks.css";
import { setDrinks } from "../../../configureStore/drinksSlice";

const AdminArchiveDrinks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(9);

  const [render, setRender] = useState(false);

  const drinks = useSelector((state) => state.drinks);

  const dispatch = useDispatch();
  const node = useRef(null);

  const indexedDrinks = Paginate([...drinks], currentPage, perPage);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: drinksArray } = await getAllDrinks();

        dispatch(setDrinks(drinksArray));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const activateButtons = (id) => {
    if (id !== "close") {
      node.current = drinks.find((drink) => drink.id === id);
      setRender(!render);
    } else {
      node.current = null;
      setRender(!render);
    }
  };

  const handleDeleteDrink = async (drinkId) => {
    try {
      const { status } = await deleteDrink(drinkId);
      if (status === 200) {
        node.current = null;
        let array = drinks.filter((drink) => drink.id !== drinkId);
        dispatch(setDrinks(array));
        dispatch(setSortedDrinks(array));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AdminBox customStyle={{ position: "relative" }}>
      <Title text={"آرشیو نوشیدنی ها"} color="#fff" />

      {node.current !== null ? (
        <div className="archiveShowButtons-container">
          <Title text={node.current.drinkName} color="#fff" />
          <div className="archiveShowButtons">
            <Link to={`/admin/edit/${node.current.id}`}>ویرایش نوشیدنی</Link>
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
          <div key={drink.id}>
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
              <div></div>
            </div>
          </div>
        ))}
      </ul>
      <MenuPaginate
        totalDrinks={drinks.length}
        currentPage={currentPage}
        perPage={perPage}
        onPageChange={handlePageChange}
        customStyle={{ bottom: ".2rem", left: "50%" }}
      />
    </AdminBox>
  );
};

export default AdminArchiveDrinks;

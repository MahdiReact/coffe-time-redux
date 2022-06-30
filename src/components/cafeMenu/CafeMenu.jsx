import React, { useState } from "react";
import MenuPaginate from "./MenuPaginate";
import { NavLink } from "react-router-dom";
import { Paginate } from "../paginate/indexDrinks";
import { useSelector } from "react-redux";

const CafeMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  const drinks = useSelector((state) => state.drinks);
  const sortedDrinks = useSelector((state) => state.sortedDrinks);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexedDrinks = Paginate([...sortedDrinks], currentPage, perPage);

  return (
    <div className="cafeMenu-container">
      <div className="cafeMenu">
        <table>
          <thead>
            <tr>
              <th>نوشیدنی</th>
              <th>قیمت</th>
            </tr>
          </thead>
          <tbody style={{ fontWeight: "550" }}>
            {indexedDrinks.length === 0 ? (
              <p style={{ padding: "1rem 0" }}>
                نوشیدنی مورد نظر شما موجود نیست{" "}
              </p>
            ) : (
              indexedDrinks.map((drink) => (
                <tr key={drink.id}>
                  <td>
                    <NavLink
                      to={`${drink.id}`}
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "rgb(231, 187, 115)" : "",
                        };
                      }}
                    >
                      {drink.drinkName}
                    </NavLink>
                  </td>
                  <td>{drink.price}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <MenuPaginate
          totalDrinks={sortedDrinks.length}
          currentPage={currentPage}
          perPage={perPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CafeMenu;

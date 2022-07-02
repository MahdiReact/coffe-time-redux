import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortedDrinks } from "../../configureStore/sortedDrinks";

import BoxBorder from "../repeatable/BoxBorder";
import Title from "../repeatable/Title";
import SearchBox from "../topMenu/SearchBox";

//styleSheet
import "./cafeMenuCustomizer.css";


const CafeMenuCustomizer = ({setCurrentPage}) => {
  const drinks = useSelector((state) => state.drinks);
  const dispatch = useDispatch();

  const node = useRef(null);

  const handleFilterCategory = (event) => {
    let selectedCategory = event.target.value;
    const filterDrinks = () => {
      if (selectedCategory === "") {
        return drinks;
      } else if (selectedCategory === "1" || selectedCategory === "0") {
        const selectedCat = Boolean(parseInt(selectedCategory));
        return drinks.filter((drink) => drink.coffeBase === selectedCat);
      } else {
        return drinks.filter((drink) => drink.category === selectedCategory);
      }
    };
    const sortedDrinks = filterDrinks();
    dispatch(setSortedDrinks(sortedDrinks));
  };
  return (
    <BoxBorder classNames="cafeMenuCustomizer-container">
      <Title text={"مشخص کن چه نوشیدنی ای میخوای ؟"} color="#fff" />
      <SearchBox />
      <select ref={node} onChange={handleFilterCategory}>
        <option value="">نوع نوشیدنی</option>
        <option value="cold">نوشیدنی سرد</option>
        <option value="hot">نوشیدنی گرم</option>
        <option value={1}>بر پایه قهوه</option>
        <option value={0}>بدون قهوه </option>
      </select>
      <button
        className="fa fa-times clear-filters"
        onClick={() => {
          node.current.value = "";
          dispatch(setSortedDrinks(drinks));
        }}
      />
    </BoxBorder>
  );
};

export default CafeMenuCustomizer;

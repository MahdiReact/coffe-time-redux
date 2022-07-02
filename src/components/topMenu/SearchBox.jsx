import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortedDrinks } from "../../configureStore/sortedDrinks";

import "./searchBox.css";

const SearchBox = () => {
  const [searchedValue, setSearchedValue] = useState("");

  const drinks = useSelector((state) => state.drinks);
  const dispatch = useDispatch();

  const handleSearchDrink = () => {
    let searchedDrinks = drinks;
 

    if (searchedValue !== "") {
      searchedDrinks = drinks.filter((drink) =>
        drink.drinkName.includes(searchedValue)
      );
    }
    dispatch(setSortedDrinks(searchedDrinks));
  };
  const handleTyping = (event) => {
    setSearchedValue(event.target.value);
  };
  const cancelSearchDrinks = () => {
    setSearchedValue("");
    dispatch(setSortedDrinks(drinks));
  };

  return (
    <div className="searchBox-container">
      <input
        type="text"
        className="search-field"
        placeholder="چی بدم خدمتتون..؟"
        value={searchedValue}
        onChange={handleTyping}
      />
      <button className="btn fa fa-search" onClick={handleSearchDrink} />
      <button
        className="btn cancelSearch fa fa-times"
        onClick={cancelSearchDrinks}
      />
    </div>
  );
};

export default SearchBox;

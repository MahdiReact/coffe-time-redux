import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Title from "./../repeatable/Title";
import MainSlider from "./../mainSlider/MainSlider";
import CafeMenuCustomizer from "./../cafeMenu/CafeMenuCustomizer";
import CafeMenu from "./../cafeMenu/CafeMenu";
import ViewDrink from "./../cafeMenu/ViewDrink";
import BoxBorder from "../repeatable/BoxBorder";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  const { drinkId } = useParams();
  const drinks = useSelector((state) => state.drinks);

  const choosenDrink = drinks.find((drink) => drink.id == drinkId);

  return (
    <MainLayout>
      <Title text={"خنک ترین نوشیدنی ها"} />
      {/* make  Slider active it's hard code */}
      <MainSlider />
      {/* make  Slider active it's hard code */}
      <Title text={"منوی ما"} />
      <div>
        <CafeMenuCustomizer />
        <div className="cafeMenu-grid">
          {choosenDrink ? (
            <ViewDrink drink={choosenDrink} />
          ) : (
            <BoxBorder classNames="drinkIndex">
              <h4>نوشیدنی خوشمزتو انتخاب کن دوست من .</h4>
            </BoxBorder>
          )}
          <div className="cafeMenu-fix">
            <CafeMenu />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

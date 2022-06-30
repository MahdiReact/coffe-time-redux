import React from "react";


import HeaderContainer from "../header/HeaderContainer";
import FooterContainer from'../footer/FooterContainer';
import TopMenu from "../topMenu/TopMenu";

const MainLayout = ({children}) => {
  return (
    <div className="App">
      <HeaderContainer />
      <TopMenu />
      <main className="renderer">
          {children}
      </main>
      <FooterContainer/>
    </div>
  );
};

export default MainLayout;

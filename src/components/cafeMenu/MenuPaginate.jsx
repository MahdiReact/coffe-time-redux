import React from "react";
import { range } from "lodash";

const MenuPaginate = ({totalDrinks , currentPage , perPage , onPageChange , customStyle={}}) => {

  const pageCount = Math.ceil(totalDrinks / perPage) ;
  if (pageCount === 1) {return null};
  const pages = range(1 , pageCount + 1);
  return (
      <ul className="paginate-container" style={customStyle}>
          {pages.map(page => (
            <li key={page} className={page === currentPage ? "active-page" : ""} onClick={() => { onPageChange(page)}}>{page}</li>
          ))}
      </ul>
  );
};

export default MenuPaginate;

import React from "react";

const BoxBorder = ({children , classNames}) => {
  return (
    <div className={`pub-border ${classNames}`}>
        <div className="boxBorder-content">
            {children}
        </div>
    </div>
  );
};

export default BoxBorder;

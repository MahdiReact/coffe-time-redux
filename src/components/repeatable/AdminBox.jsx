import React from "react";

const AdminBox = ({children , classNames , customStyle = {}}) => {
  return (
    <div className={`adminBox ${classNames}`}>
        <div className="adminBox-content" style={customStyle}>
            {children}
        </div>
    </div>
  );
};

export default AdminBox;

import React from "react";

const Title = ({text , color = "black"}) => {
  return (
    <h3 className="pub-title" style={{color : `${color}`}}>{text}</h3>
  );
};

export default Title;

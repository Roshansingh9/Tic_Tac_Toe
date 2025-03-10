import React from "react";
import Board from "./Board";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;

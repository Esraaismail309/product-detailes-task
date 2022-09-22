import React from "react";

export const Button = (props) => {
  return (
    <>
      {props.btnImg ? (
        <button className={`mt-3 ${props.btnStyle}`}>
          <img src={props.btnImg} style={{ width: "25%" }} alt="btnimg" />{" "}
          {props.btnText}
        </button>
      ) : (
        <button className={`mt-3 ${props.btnStyle}`}>{props.btnText}</button>
      )}
    </>
  );
};

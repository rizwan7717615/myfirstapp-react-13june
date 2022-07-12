import React from "react";

export default function ComlexButton(props) {
  console.log(props);
  // const { bg, text, icon } = props;

  return (
    <button className={`btn btn-lg btn-${props.bg}`}>
      <i className={`fas fa-${props.icon}`}></i>
      {props.text}
    </button>
  );
}

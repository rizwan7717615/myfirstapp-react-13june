import React from "react";

// export default function simpleButton(props) {
//   console.log(props);
//   return <button className="btn btn-primary">Create</button>;
// }

export const SimpleButton = (props) => {
  console.log(props);
  return (
    <button className={`btn btn-${props.bgColor}`}>
      <i className={`${props.icon}`}></i> {props.text}
    </button>
  );
};

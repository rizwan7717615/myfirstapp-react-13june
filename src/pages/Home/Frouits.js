import React from "react";

export default function Frouits() {
  const fruits = ["apple", "mango", "orange", "Banana", "Chairry"];
  const users = { name: "Rizwan", age: 27, jamat: 10, RegistraionNo: 1809 };
  const { jamat, RegistraionNo } = users;

  return (
    <div className="row">
      <div className="col text-center">
        <h2>this is my Fruits Sections</h2>
      </div>
      <p>
        <ul className="text-center">
          {fruits.map((fruit, i) => {
            return (
              <li key={i} style={{ listStyleType: "none" }}>
                {1 + i}-{fruit}
              </li>
            );
          })}
        </ul>
      </p>
      <h2>
        My name is {users.name} and my age is {users.age} year and my class
        {jamat} and my Reg No. {RegistraionNo}
      </h2>
    </div>
  );
}

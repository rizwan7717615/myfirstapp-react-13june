import React from "react";

export default function Spreading() {
  const myVehicle = {
    brand: "Ford",
    model: "Mustang",
    color: "red",
    owner: "Riaz",
  };

  const updateMyVehicle = {
    type: "car",
    year: 2021,
    color: "yellow",
    owner: "Muhammad Talha",
  };
  const myUpdatedVehicle = {
    ...myVehicle,
    ...updateMyVehicle,
  };
  console.log(myUpdatedVehicle);
  // { brand, model, color, owner, year, type } = myUpdatedVehicle;

  return (
    <>
      <div>
        <p className="text-uppercase text-center ">
          I have an vehicle whis has {myUpdatedVehicle.color} color and owner
          name {myUpdatedVehicle.owner}
        </p>
      </div>
      {/* <P>Now im using spreeding and destructring(it is not working)</P> */}
    </>
  );
}

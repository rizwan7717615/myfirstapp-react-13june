import React from "react";

export default function Hero() {
  const myName = (e) => {
    return "My name is" + " " + e;
  };
  return (
    <>
      <div className="  bg-primary">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-center">
                <h2>This is hero Section and</h2>
                <p className="mb-0">{myName("Rizwan")}</p>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

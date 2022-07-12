import React from "react";
import { countries } from "../../components/data/countries";
export default function Countries() {
  console.log(countries);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>This is Countries section</h2>
            <p className="text-center">
              <ul>
                {countries.map((country, i) => {
                  <li key={i}>
                    return {i + 1}-{country};
                  </li>;
                })}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { countries } from "../../components/data/countries";
import { SimpleButton } from "../../components/Buttons/simpleButton";
import ComlexButton from "../../components/Buttons/ComlexButton";

export default function Country() {
  console.log(SimpleButton);
  return (
    <div className="row">
      <div className="col text-center">
        <h2>this is my Country Sections</h2>
      </div>
      <div>
        <ul className="text-center justify-left">
          {countries.map((country, i) => {
            return (
              <li key={i} style={{ listStyleType: "none" }}>
                {1 + i}-{country}
              </li>
            );
          })}
        </ul>
        <div className="text-center">
          <SimpleButton bgColor="success" text="create" />
        </div>
        <div className="text-center mt-2">
          <SimpleButton bgColor="danger" text="delete" icon="fas fa-trash" />
        </div>
        <div className="text-center mt-2">
          <ComlexButton bg="secondary" text="Sign In" icon="user" />
        </div>
      </div>
    </div>
  );
}

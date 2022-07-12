import React from "react";
import ComlexButton from "../../components/Buttons/ComlexButton";
export default function Event() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("It is clickAble");
  };
  return (
    <div
      style={{
        backgroundColor: "#2a9d8f",
        minHeight: 290,
      }}
    >
      <div className="container ">
        <div className="row">
          <div className="col">
            <form className="text-center">
              <input
                type="text"
                className="form-control my-2 mt-5 "
                placeholder="Enter text"
              />
              <ComlexButton text="Go to" bg="dark" icon="plus" />
              <button
                className="btn btn-lg btn-secondary ms-2"
                onClick={handleSubmit}
              >
                <i className="fas fa-car"></i> clikAble Button
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

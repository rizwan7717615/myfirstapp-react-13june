import React from "react";

export default function index() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="bg bg-danger text-white text-center py-1 ">
        <p className="mb-0">
          &copy; {year} University of Agriculture, Faisalabad, Pakistan. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

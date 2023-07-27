import React, { useRef } from "react";

import "./../Styles/category.css";

function Category() {
  return (
    <div className="category">
      <div className="category--title">
        <div className="ct--title"> Devlopment</div>
        <div className="apply">
          <CheckBox />
        </div>
      </div>
      <Product />
      <Product />
      <Product />
    </div>
  );
}

function Product() {
  return (
    <div className="product ">
      <div className="product--dis ct--title">Design</div>
      <div className="apply">
        <CheckBox />
      </div>
    </div>
  );
}

function CheckBox() {
  let Checkbox = useRef();

  function HandleClick() {
    if (Checkbox.current.style.backgroundColor === "black") {
      Checkbox.current.style.backgroundColor = "white";
    } else {
      Checkbox.current.style.backgroundColor = "black";
    }
    // Handle State
  }
  return (
    <div className="checkbox" onClick={HandleClick} ref={Checkbox}>
      <svg
        fill="#000000"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        viewBox="0 0 335.765 335.765"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795 "></polygon>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
}

export default Category;

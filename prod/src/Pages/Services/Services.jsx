import React from "react";
import Headline from "./Components/Headline";
import Category from "./Components/Category";
import Button from "./../../Components/Button";

function Services() {
  return (
    <div className="services--main">
      <Headline />
      <Category />
      <Category />
      <Category />
      <div className="checkout">
        <Button title="Check out pricing?"></Button>
      </div>
    </div>
  );
}

export default Services;

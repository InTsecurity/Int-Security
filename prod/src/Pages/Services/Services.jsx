import React from "react";
import Headline from "./Components/Headline";
import Category from "./Components/Category";
import Button from "./../../Components/Button";
import { service } from "./Service";

function Services() {
  const data = service.map((e) => {
    return <Category title={e.head} categories={e.categories} key={e.head} />;
  });
  return (
    <div className="services--main">
      <Headline />
      {data}
      <div className="checkout">
        <Button title="Check out pricing?"></Button>
      </div>
    </div>
  );
}

export default Services;

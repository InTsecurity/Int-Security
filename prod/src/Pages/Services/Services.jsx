import React, { useState } from "react";
import Headline from "./Components/Headline";
import Category from "./Components/Category";
import Button from "./../../Components/Button";
import { service } from "./Service";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const [selectedService, setselectedService] = useState([
    {
      title: "Devlopment",
      Devlopment: false,
      services: {
        "UI, UX Design": false,
        "Frontend Devlopment": false,
        "Backend Devlopment": false,
        "Fullstack Devlopment": false,
      },
    },
    {
      title: "Deployment",
      Deployment: false,
      services: {
        "Local Deployment": false,
        "AWS Deployment": false,
        "Google Cloud Deployment": false,
        "Other Cloud Delpoyment": false,
      },
    },
    {
      title: "Security",
      Security: false,
      services: {
        "Red Team Service": false,
        "Blue Team Service": false,
        "Managed Bug bounty Platform": false,
      },
    },
  ]);

  const data = service.map((e) => {
    return (
      <Category
        title={e.head}
        categories={e.categories}
        key={e.head}
        selectedService={selectedService}
        setselectedService={setselectedService}
      />
    );
  });

  function Checkout() {
    const services = JSON.stringify(selectedService);
    navigate(`/contactUs?services=${services}`);
  }
  return (
    <div className="services--main">
      <Headline />
      {data}
      <div className="checkout" onClick={Checkout}>
        <Button title="Check out pricing?"></Button>
      </div>
    </div>
  );
}

export default Services;

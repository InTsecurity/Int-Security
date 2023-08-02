import { useRef, useState } from "react";

import "./../Styles/category.css";

function Category(props) {
  const data = props.categories;
  const services = data.map((e) => {
    return <Product title={e} key={e} productTitle={props.title} />;
  });
  return (
    <div className="category">
      <div className="category--title">
        <div className="ct--title">{props.title}</div>
        <div className="apply">
          <CheckBox service={props.title} isHead={true} categories={data} />
        </div>
      </div>
      {services}
    </div>
  );
}

function Product({ title, productTitle }) {
  return (
    <div className="product ">
      <div className="product--dis ct--title">{title}</div>
      <div className="apply">
        <CheckBox service={title} isHeasd={false} productTitle={productTitle} />
      </div>
    </div>
  );
}

function CheckBox({ service, isHead, productTitle, categories }) {
  let Checkbox = useRef();

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

  function HandleClick(ser, isHead, productTitle, categories) {
    const temp = selectedService;
    console.log(ser);
    temp.map((e) => {
      if (isHead) {
        if (e.title === ser) {
          if (e.ser) {
            e[ser] = false;
            document.getElementById(ser).style.backgroundColor = "black";
            categories.map((t) => {
              e.services[t] = false;
              document.getElementById(t).style.backgroundColor = "black";
            });
          } else {
            e[ser] = true;
            document.getElementById(ser).style.backgroundColor = "white";
            categories.map((t) => {
              e.services[t] = true;
              document.getElementById(t).style.backgroundColor = "white";
            });
          }
        }
      } else {
        if (e.title === productTitle) {
          if (e.services.ser) {
            // uncheck
            e.services[ser] = false;
            document.getElementById(ser).style.backgroundColor = "black";
          } else {
            // check
            e.services[ser] = true;
            document.getElementById(ser).style.backgroundColor = "white";
          }
        }
      }
    });
    setselectedService(temp);
    console.log(temp);
  }

  return (
    <div
      className="checkbox"
      id={`${service}`}
      onClick={(e) => {
        HandleClick(service, isHead, productTitle, categories);
      }}
      ref={Checkbox}
    >
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

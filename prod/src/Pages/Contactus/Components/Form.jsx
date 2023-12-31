import { useState } from "react";
import { VerifyName, VerifyNumber } from "../JS/Verification";
import "./../styles/main.css";

function ContactUsForm(props) {
  const [Details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    country: "",
    org: "",
    orgWeb: "https://",
    others: "",
  });

  const [isSubmitted, setisSubmitted] = useState(false);

  let submitBtn = "";

  if (isSubmitted) {
    submitBtn = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M10 50A40 40 0 0 0 90 50A40 44.5 0 0 1 10 50"
          fill="#ffffff"
          stroke="none"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 52.25;360 50 52.25"
          ></animateTransform>
        </path>
      </svg>
    );
  } else {
    submitBtn = "Submit";
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!isSubmitted) {
          // setisSubmitted(true);
          const stringify = JSON.stringify(Details);
          const res = fetch(
            "http://localhost:9000/.netlify/functions/app/contact/new",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: stringify,
            }
          );

          res.then((e) => {
            console.log(e);
            setisSubmitted(false);
          });
        }
      }}
    >
      <div className="cus--name">
        <div className="cus--fname">
          <label htmlFor="fname">First name:</label>
          <input
            value={Details.fname}
            className="fname"
            type={"name"}
            placeholder="John"
            required
            onChange={(e) => {
              if (VerifyName(e.target.value)) {
                setDetails((prevstate) => ({
                  ...prevstate,
                  fname: e.target.value,
                }));
              }
            }}
          ></input>
        </div>
        <div className="cus--fname cus--lname">
          <label htmlFor="fname">Last name:</label>
          <input
            value={Details.lname}
            className="fname"
            type={"name"}
            placeholder="Carter"
            required
            onChange={(e) => {
              if (VerifyName(e.target.value)) {
                setDetails((prevstate) => ({
                  ...prevstate,
                  lname: e.target.value,
                }));
              }
            }}
          ></input>
        </div>
      </div>
      <div className="cus--name next--details">
        <div className="cus--fname">
          <label htmlFor="fname">Email:</label>
          <input
            value={Details.email}
            className="fname"
            type={"email"}
            placeholder="johncarter06@company.com"
            required
            onChange={(e) =>
              setDetails((prevstate) => ({
                ...prevstate,
                email: e.target.value,
              }))
            }
          ></input>
        </div>
        <div className="cus--fname cus--lname">
          <label htmlFor="fname">Phone Number:</label>
          <input
            value={Details.phone}
            className="fname"
            placeholder="**********"
            required
            onChange={(e) => {
              if (VerifyNumber(e.target.value)) {
                setDetails((prevstate) => ({
                  ...prevstate,
                  phone: e.target.value,
                }));
              }
            }}
          ></input>
        </div>
      </div>

      <div className="cus--name next--details">
        <div className="cus--fname">
          <label htmlFor="fname">Organization:</label>
          <input
            value={Details.org}
            className="fname"
            type={"name"}
            placeholder="Company"
            required
            onChange={(e) => {
              if (VerifyName(e.target.value)) {
                setDetails((prevstate) => ({
                  ...prevstate,
                  org: e.target.value,
                }));
              }
            }}
          ></input>
        </div>
        <div className="cus--fname cus--lname">
          <label htmlFor="fname">Company Website:</label>
          <input
            value={Details.orgWeb}
            className="fname"
            type={"text"}
            placeholder="https://company.org"
            required
            onChange={(e) =>
              setDetails((prevstate) => ({
                ...prevstate,
                orgWeb: e.target.value,
              }))
            }
          ></input>
        </div>
      </div>
      <div className="country">
        <label htmlFor="fname">Country:</label>
        <input
          value={Details.country}
          className="fname"
          type={"text"}
          placeholder="India"
          required
          onChange={(e) => {
            if (VerifyName(e.target.value)) {
              setDetails((prevstate) => ({
                ...prevstate,
                country: e.target.value,
              }));
            }
          }}
        ></input>
      </div>

      <div className="service">
        <label className="moreInformationLabel" htmlFor="moreInformation">
          Any additional comments or questions?
        </label>
        <input
          value={Details.others}
          className="fname moreInformation"
          placeholder="More information"
          onChange={(e) =>
            setDetails((prevstate) => ({
              ...prevstate,
              others: e.target.value,
            }))
          }
        ></input>
      </div>
      <div className="submissionDiv">
        <button className="submitbtn">{submitBtn}</button>
      </div>
    </form>
  );
}

export default ContactUsForm;

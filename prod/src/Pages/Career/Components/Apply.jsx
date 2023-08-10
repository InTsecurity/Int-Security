import "./../Styles/Apply.css";
import "./../../Contactus/styles/main.css";
import Button from "./../../../Components/Button";
import axios from "axios";
import { useState } from "react";

function Apply() {
  const [Details, setDetails] = useState({
    Username: "",
    phoneNO: "",
    email: "",
    position: "",
  });

  const [File, setFile] = useState({ selectedFile: null });

  const [isSubmited, setisSubmited] = useState(false);

  const [errorMessage, seterrorMessage] = useState("");

  const OnFileChange = (event) => {
    setFile({ selectedFile: event.target.files[0] });
  };

  const fileName = () => {
    if (File.selectedFile) {
      if (File.selectedFile.name.length > 25) {
        const shortedName = File.selectedFile.name.slice(0, 25) + "...";
        return <>{shortedName}</>;
      }
      return <>{File.selectedFile.name}</>;
    } else {
      return <>Upload Resume</>;
    }
  };

  async function SendData() {
    const MergedData = {
      UserDetails: Details,
      FileDetails: File,
    };

    console.log(MergedData);
    if (!File.selectedFile) {
      seterrorMessage("Please Select resume file!");
      return 0;
    }

    if (!isSubmited) {
      // setisSubmited(true);
      await axios
        .post(
          "http://localhost:9000/.netlify/functions/app/jobs/apply",
          MergedData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((e) => {
          console.log(e);
        });
    }
  }

  return (
    <div className="applyform" id="form">
      <div className="services--title af--title--main">
        Ready to Take the Leap?
        <div className="more--details">
          If you're excited to embark on a journey of growth and excellence,
          fill out the form below to express your interest in joining our team.
        </div>
      </div>
      <div className="apply--form">
        <div className="af--title">Contact us!</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            SendData();
          }}
        >
          <div className="single--level">
            <div className="block">
              <label>Your name:</label>
              <input
                type="text"
                className="af--name"
                placeholder="John Walker"
                required
                onChange={(e) => {
                  setDetails((prev) => ({
                    ...prev,
                    Username: e.target.value,
                  }));
                }}
                value={Details.Username}
              />
            </div>
            <div className="block block2">
              <label>Phone No:</label>
              <input
                type="text"
                className="af--name"
                placeholder="0000000000"
                required
                onChange={(e) => {
                  setDetails((prev) => ({
                    ...prev,
                    phoneNO: e.target.value,
                  }));
                }}
                value={Details.phoneNO}
              />
            </div>
          </div>
          <div className="block3">
            <label htmlFor="af--email">Email:</label>

            <input
              type="email"
              className="af--email af--name"
              required
              onChange={(e) => {
                setDetails((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
              value={Details.email}
              placeholder="john@intsecurity.com"
            />
          </div>
          <div className="block3">
            <label htmlFor="af--email">Position:</label>

            <input
              type="text"
              className="af--email af--name"
              required
              onChange={(e) => {
                setDetails((prev) => ({
                  ...prev,
                  position: e.target.value,
                }));
              }}
              value={Details.position}
              placeholder="SDE-II"
            />
          </div>
          <div className="single--level mt60">
            <div className="af--inputBox">
              <label htmlFor="resume" className="custom-file-upload">
                {fileName()}
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={(Event) => {
                  OnFileChange(Event);
                }}
                id="resume"
                className="resume"
              />
            </div>
            <Button title={`${isSubmited ? "Checkng" : "Submit"}`} />
          </div>
        </form>
        <div className="error">{errorMessage}</div>
      </div>
    </div>
  );
}

export default Apply;

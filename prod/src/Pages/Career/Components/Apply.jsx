import "./../Styles/Apply.css";
import "./../../Contactus/styles/main.css";
import Button from "./../../../Components/Button";

function Apply() {
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
        <form>
          <div className="single--level">
            <div className="block">
              <label>Your name:</label>
              <input
                type="text"
                className="af--name"
                placeholder="John Walker"
                required
                value=""
              />
            </div>
            <div className="block block2">
              <label>Phone No:</label>
              <input
                type="text"
                className="af--name"
                placeholder="0000000000"
                required
                value=""
              />
            </div>
          </div>
          <div className="block3">
            <label htmlFor="af--email">Email:</label>

            <input
              type="email"
              className="af--email af--name"
              required
              value=""
              placeholder="john@intsecurity.com"
            />
          </div>
          <div className="block3">
            <label htmlFor="af--email">Position:</label>

            <input
              type="email"
              className="af--email af--name"
              required
              value=""
              placeholder="SDE-II"
            />
          </div>
          <div className="single--level mt60">
            <div className="af--inputBox">
              <label htmlFor="resume" className="custom-file-upload">
                Upload resume
              </label>
              <input type="file" id="resume" className="resume" />
            </div>
            <Button title="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Apply;

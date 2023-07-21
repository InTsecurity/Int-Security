import Button from "../../../Components/Button";
import "./../Styles/About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about--detials">
        Empowering Startups with Secure and Tailored Websites. We understand
        that startups need a strong online presence to succeed in today's
        digital world. That's why we are dedicated to providing comprehensive
        web solutions that allow you to focus on your core business while
        leaving the technical aspects to us.
      </div>
      <div className="about--btn">
        <Button title="Contact Us" link="/ContactUs" />
      </div>
    </div>
  );
}

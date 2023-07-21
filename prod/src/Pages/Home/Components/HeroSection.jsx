import "./../Styles/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="title--wrapper">
          <div className="title">
            INT
            <div className="title--works--content">
              <div className="title--works">Design</div>
              <div className="title--works">Create</div>
              <div className="title--works">Deploy</div>
              <div className="title--works">Secure</div>
            </div>
          </div>
          <div className="title reduce--tm">
            SECURITY
            <div className="title--details">
              Specialized in Web Designs, UX / UI, Webflow, Deployment and
              Security. Customization at your fingertips.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

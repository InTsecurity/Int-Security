import Question from "../../../Components/Question";
import Button from "./../../../Components/Button";
import "./../Styles/Faq.css";

function Faq() {
  return (
    <div className="faq">
      <div className="services--title faq--title">
        Got Questions? <br />
        We've Got Answers!
        <div className="more--details">
          Have more questions or need further assistance? We're here to help!
          Contact our friendly team to inquire about our services, discuss your
          project requirements, or seek support for your existing website. We
          value your feedback and are excited to be your digital partner. Reach
          out to us today and let's start building your online success
          together!"
          <div className="faq--btn">
            <Button title="Countact Us" link="/ContactUs" />
          </div>
        </div>
      </div>
      <div className="questions">
        <Question
          id="01"
          question="What types of websites do you specialize in creating?"
          answer="We specialize in creating a wide range of websites, including
          portfolio sites, e-commerce platforms, content-rich blogs, corporate
          websites, and more. Our team works closely with you to customize the
          site to your specific needs and brand identity."
        />
        <Question
          id="02"
          question="How long does it typically take to develop and deploy a website?"
          answer="The timeline for website development and deployment varies depending on the complexity and features required. Generally, we aim to deliver a fully functional website in 2-4 weeks. However, the actual timeframe will be discussed during the initial consultation."
        />
        <Question
          id="03"
          question="What ongoing support do you offer after the website is launched?"
          answer="Our support doesn't end after the website launch. We provide ongoing support for any technical issues, updates, or adjustments you may need. Our dedicated support team is always available to assist you."
        />
        <Question
          id="04"
          question="Do you offer website maintenance services?"
          answer="Yes, we offer website maintenance packages to keep your site running smoothly. From regular updates to backups, performance optimization to bug bounty program, our maintenance services ensure your website remains at its best."
        />
        <Question
          id="05"
          question="Can I request additional features for my website after the initial development?"
          answer="Certainly! We understand that business needs may evolve over time. You can request additional features or modifications, and our team will work with you to accommodate those changes."
        />
      </div>
    </div>
  );
}

export default Faq;

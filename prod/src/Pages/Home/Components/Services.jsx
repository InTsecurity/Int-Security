import Cards from "../../../Components/Cards";
import "./../Styles/Services.css";
import { services } from "../Service";

function Services() {
  const MappedData = services.map((e) => {
    return <Cards No={e.No} title={e.Title} details={e.Details} key={e.No} />;
  });
  return (
    <div className="services">
      <div className="services--title">
        Elevate Your Web Presence with Our Services
      </div>

      <div className="service--cards">{MappedData}</div>
    </div>
  );
}

export default Services;

import "./styles/Cards.css";

function Cards(props) {
  return (
    <div className="cards">
      <div className="cards--num">{props.No}</div>
      <div className="cards--details">
        <div className="cards--title">{props.title}</div>
        {props.details}
      </div>
    </div>
  );
}

export default Cards;

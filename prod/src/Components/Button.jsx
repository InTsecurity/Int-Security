import "./styles/Button.css";
import { useNavigate } from "react-router-dom";

function Button(props) {
  const navigate = useNavigate();

  return (
    <div className="button">
      <button
        className="main--btn"
        onClick={(e) => {
          navigate(props.link);
        }}
      >
        {props.title}
      </button>
    </div>
  );
}

export default Button;

import { BsPeople } from "react-icons/bs";
import { RiSuitcase3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  return (
    <div className="buttons">
      <button
        type="button"
        className="btn"
        onClick={() => navigate("/employee")}
      >
        <BsPeople className="btn-icon" />
        Сотрудники
      </button>

      <button
        type="button"
        className="btn"
        onClick={() => navigate("/holidays")}
      >
        <RiSuitcase3Line className="btn-icon" />
        Отпуска
      </button>

      <button
        type="button"
        className="btn"
        onClick={() => navigate("/candidates")}
      >
        <BsPeople className="btn-icon" />
        Кандидаты
      </button>
    </div>
  );
};

export default Button;

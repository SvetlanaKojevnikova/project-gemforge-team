import { useNavigate } from "react-router-dom";

const Button = ({ icon, path, title }) => {
  const navigate = useNavigate();
  return (
    <button type="button" className="btn" onClick={() => navigate(path)}>
      <div className="btn-icon">{icon}</div>
      {title}
    </button>
  );
};

export default Button;

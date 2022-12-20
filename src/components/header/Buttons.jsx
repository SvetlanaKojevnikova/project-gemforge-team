import Button from "../button/Button";

const Buttons = ({ buttons }) => {
  return (
    <div className="buttons">
      {buttons.map((button, id) => (
        <Button
          key={button.id}
          icon={button.icon}
          title={button.title}
          path={button.path}
        />
      ))}
    </div>
  );
};

export default Buttons;

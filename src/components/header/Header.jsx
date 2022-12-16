import Buttons from "./Buttons";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__header">
          <div className="header__header__left">
            <h2 className="header__header__title">
              <span className="header__header__title-color">Gemforge: </span>
              Команда
            </h2>
            <div className="header__header__btns">
              <Buttons />
            </div>
          </div>
          <div className="header__header__right">
            <h2 className="header__header__rigth-name">Воробьев Евгений</h2>
            <h2 className="header__header__rigth-job">Администратор</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

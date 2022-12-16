import { useState } from "react";
import employees from "../../data/employees";
import Employee from "./Employee";
import HeaderList from "./HeaderList";

const Main = () => {
  const [search, setSearch] = useState("");
  return (
    <section className="section">
      <div className="container">
        <input
          value={search}
          type="search"
          placeholder="Поиск сотрудников по имени"
          className="section__search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="section__employees">
          <div className="section__header">
            <HeaderList />
            <div className="section__header-list">
              {employees
                .filter((item, id) =>
                  item.lastName.toUpperCase().includes(search.toUpperCase())
                )
                .map((item, id) => (
                  <div key={item.id}>
                    <Employee
                      firstName={item.firstName}
                      lastName={item.lastName}
                      jobTitle={item.jobTitle}
                      placeOfWork={item.placeOfWork}
                      placeOfWork2={item.placeOfWork2}
                      telephon={item.telephon}
                      mail={item.mail}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

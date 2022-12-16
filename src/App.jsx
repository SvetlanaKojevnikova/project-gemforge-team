import "./scss/styles.scss";
import Main from "./components/main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Holidays from "./components/pages/Holidays";
import Candidates from "./components/pages/Candidates";
import NotFound from "./components/pages/NotFound";
import MainLayuot from "./components/header/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayuot />}>
            <Route path="employee" element={<Main />} />
            <Route path="holidays" element={<Holidays />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

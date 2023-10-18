import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { data } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="font">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/country/:alpha3Code"
            element={<CountryDetails data={data} />}
          />
        </Routes>
      </BrowserRouter>
      <span class="scroll-top">
        <FontAwesomeIcon
          icon={faAngleUp}
          style={{ fontSize: "30px", color: "#202c37", marginTop: "10px" }}
          onClick={scrollToTop}
        />
      </span>
    </div>
  );
}

export default App;

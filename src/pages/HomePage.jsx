import "../styles/App.css";

import { Header } from "../components/header/Header";
import { Link } from "react-router";
import { Link as ScrollLink, Element } from "react-scroll";

function HomePage() {
  return (
    <div className="App">
      <Header />
      <ScrollLink className="btn" to="secao1" smooth={true} duration={500}>
        seçao 1
      </ScrollLink>
      <ScrollLink className="btn" to="secao2" smooth={true} duration={500}>
        seçao 2
      </ScrollLink>

      <Element name="secao1" className="secao">
        <Link rel="stylesheet" to="/about">
          {" "}
          sobre
        </Link>
      </Element>
      <Element name="secao2" className="secao">
        <Link rel="stylesheet" to="/about">
          {" "}
          sobre
        </Link>
      </Element>
    </div>
  );
}

export default HomePage;

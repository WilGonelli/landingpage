import "../styles/App.css";
import { Header } from "../components/header/Header";

import { Link } from "react-router";

function AboutPage() {
  return (
    <div className="App">
      <Header />
      <h2>sobre</h2>
      <Link rel="stylesheet" to="/">
        {" "}
        voltar
      </Link>
    </div>
  );
}

export default AboutPage;

import React from "react";
import HeadPhone from "../assets/img/headphones.svg";
import "./css/Login.scss";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <section id="main">
        <div className="nav-item">
          <a className="navbar-brand" href="/">
            Vem
          </a>
        </div>
        <div className="main-row">
          <div className="main-row-img">
            <img className="head-phone-img" src={HeadPhone} alt="" />
          </div>
          <div className="main-row-text">
            <img src="VEM-trans.png" alt="" />
            <p>A place for Hottest🔥 Independent Artists!</p>
            <Link to={"/home"} className="btn">
              Start Listening
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;

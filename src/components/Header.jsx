import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "../style.scss";
import { AuthContext } from "../context/authContext";

function Header() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo Blog"></img>
          </Link>
        </div>

        <div className="category">
          <Link className="link" to="/?cat=ART">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=SCIENCE">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=TECHNOLOGY">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=CINEMA">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=DESIGN">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=FOOD">
            <h6>FOOD</h6>
          </Link>
          <span className="username">{currentUser?.username}</span>
          {currentUser ? (
            <Link onClick={logout} className="link">
              <h6>Logout</h6>
            </Link>
          ) : (
            <Link className="link" to="/login">
              <h6>Login</h6>
            </Link>
          )}
          <span className="write">
            {currentUser ? (
              <Link className="link" to="/write">
                Write
              </Link>
            ) : (
              <Link className="link" to="/login">
                Write
              </Link>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import "../App.css";
import logo from "../logo.svg";

const NavMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <header className="stylesMenu">
        <div className="styleImgDiv">
          <a className="aLogo" href="#">
            <img className="logoImg" src={logo} />
          </a>
          <label className="label-search">
            <div className="search-cont">
              <div className="search-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-tabler"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="10" cy="10" r="7"></circle>
                  <line x1="21" y1="21" x2="15" y2="15"></line>
                </svg>
              </div>
              <div>
                <input
                  type="search"
                  className="search"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </label>
        </div>
        <div>
          <ul className="styleUl">
            <li className="styleLiOne">
              <a className="aStyle" href="">
                Cursos
              </a>
            </li>
            <li className="styleLiOne">
              <a className="aStyle" href="">
                Servicios
              </a>
            </li>
            <li className="styleLiOne">
              <a className="aStyle" href="">
                Blog
              </a>
            </li>

            <li className="styleLi">
              <a className="login" href="">
                Iniciar Sesión
              </a>
            </li>
            <li className="styleLi">
              <a className="register" href="">
                Registrate
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavMenu;

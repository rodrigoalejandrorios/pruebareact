import React from "react";
import "../App.css";
import logo from "../logo.svg";

const handleSubmit = (e) => {};

const NavMenu = () => {
  return (
    <>
      <header className="stylesMenu">
        <div className="styleImgDiv">
          <a href="#">
            <img src={logo} style={{ width: "45px" }} />
          </a>
          <input
            type="search"
            className="search"
            placeholder="Buscar...🧐"
          ></input>
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

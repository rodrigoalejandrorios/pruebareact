import React, { useState } from "react";
import "../App.css";
import logo from "../logo.svg";

const NavMenu = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;

    handleSearch(search);
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <header className="stylesMenu">
        <div className="styleImgDiv">
          <a className="aLogo" href="#">
            <img className="logoImg" src={logo} />
          </a>
          <form onSubmit={handleSubmit}>
            <label className="label-search">
              <div className="search-cont">
                <div className="search-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-tabler"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                    value={search}
                    onChange={handleInput}
                  ></input>
                </div>
              </div>
            </label>
          </form>
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
            <li className="styleLiOne">
              <a className="aStyle" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shopping-cart"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="6" cy="19" r="2"></circle>
                  <circle cx="17" cy="19" r="2"></circle>
                  <path d="M17 17h-11v-14h-2"></path>
                  <path d="M6 5l14 1l-1 7h-13"></path>
                </svg>
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

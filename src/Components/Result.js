import React from "react";

const ResultSearch = ({ searchCon }) => {
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <h1>Bienvenidos a nuestro Store</h1>
      </div>
      <div>{searchCon ? <h1> Resultados de {searchCon}</h1> : ""}</div>
    </>
  );
};

export default ResultSearch;

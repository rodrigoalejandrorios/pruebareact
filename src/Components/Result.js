import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const name = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin",
];

const ResultSearch = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div>
        <TextField
          style={{ margin: "40px 0 0 20px" }}
          type="search"
          id="outlined-basic"
          variant="outlined"
          label="Escribe"
          value={search}
          onChange={handleChange}
        />
      </div>
      <div>
        <h1>{search}</h1>
      </div>
    </>
  );
};

export default ResultSearch;

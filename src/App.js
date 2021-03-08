import { useState } from "react";
import NavBar from "./Components/Nav";
import ResultSearch from "./Components/Result";

const App = () => {
  const [searchCon, setSearchCon] = useState("");

  const handleSearch = (name) => {
    setSearchCon(name);
  };

  return (
    <>
      <NavBar handleSearch={handleSearch} />
      <ResultSearch searchCon={searchCon} />
    </>
  );
};

export default App;

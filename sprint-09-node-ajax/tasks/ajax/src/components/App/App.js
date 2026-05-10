import People from "../People/People";
import Planets from "../Planets/Planets";
import Starships from "../Starships/Starships";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("people");

  const renderPage = () => {
    switch (currentPage) {
      case "people":
        return <People />;
      case "planets":
        return <Planets />;
      case "starships":
        return <Starships />;
      default:
        return <People />;
    }
  };
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#" onClick={() => setCurrentPage("people")}>
                People
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setCurrentPage("planets")}>
                Planets
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setCurrentPage("starships")}>
                Starships
              </a>
            </li>
          </ul>
        </nav>
        <div>{renderPage()}</div>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import LatestNews from "./latestnews";
import Latestnews2 from "./latestnews2";
import Collections from "./Collections";
import About from "./About";
import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faTruckFast,
  faBoxesPacking,
  faClipboardList,
  faPhone,
  faBezierCurve,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faTruckFast,
  faBoxesPacking,
  faClipboardList,
  faPhone,
  faBezierCurve,
  faBook
);

function App() {
  const [Latestnewsarticle, setLatestnewsarticle] = useState(null);

  /*useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hopefulbastard/react-components/master/data/database.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLatestnewsarticle(data);
      });
  }, []);*/

  return (
    <div className="App">
      <div className="grid">
        <About />
        <Collections />
        <LatestNews />
        <Latestnews2 />

        <div className="moregrid"></div>
      </div>
    </div>
  );
}

export default App;

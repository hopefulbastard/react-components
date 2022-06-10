import "./App.css";
import LatestNews from "./latestnews";
import Latestnews2 from "./latestnews2";
import Collections from "./Collections";
import About from "./About";
import Article from "./Article";
import Galleryarticle from "./Galleryarticle";
import Imagearticle from "./Imagearticle";
import Buttons from "./Buttons";
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
  const [data, setData] = useState([]);
  const getData = () => {
    fetch(
      "https://raw.githubusercontent.com/hopefulbastard/react-components/master/data/database.json"
    )
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="grid">
        {data.length > 0 &&
          data.map((article) => (
            <a href="#" className="article">
              <div
                className="articlebackground"
                style={{
                  backgroundImage: `url({article.img})`,
                }}
              ></div>
              <div className="articletext">
                <h3>{article.genre}</h3>
                <h2>{article.title}</h2>
                <p>{article.body}</p>
              </div>
            </a>
          ))}

        <Galleryarticle />
        <About />
        <Collections />
        <LatestNews />
        <Latestnews2 />
        <Imagearticle />
        <Buttons />

        <div className="moregrid"></div>
      </div>
    </div>
  );
}

export default App;

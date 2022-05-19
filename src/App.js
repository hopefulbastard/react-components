import "./App.css";
import LatestNews from "./latestnews";
import { useEffect, useState } from "react";

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
      <LatestNews />
    </div>
  );
}

export default App;

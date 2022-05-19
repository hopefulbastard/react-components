import "./App.css";
import LatestNews from "./latestnews";
import LatestNewsArticle from "./subcomponents/Latestnewsarticle";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <LatestNews />
    </div>
  );
}

export default App;

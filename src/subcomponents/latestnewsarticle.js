import { useEffect, useState } from "react";

const LatestNewsArticle = () => {
  return (
    <div className="latestnewsarticle-list">
      {Latestnewsarticle.map((Latestnewsarticle) => {
        <a className="latestnewsarticle">
          <h2>{Latestnewsarticle.title}</h2>
        </a>;
      })}
    </div>
  );
};

export default LatestNewsArticle;

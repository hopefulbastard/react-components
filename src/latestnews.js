import LatestNewsArticle from "./subcomponents/Latestnewsarticle";

const LatestNews = () => {
  return (
    <div className="latestnews">
      <div class="latestnewstitle">
        <h2>Latest News</h2>
      </div>
      {LatestNewsArticle && <LatestNewsArticle />}
    </div>
  );
};

export default LatestNews;

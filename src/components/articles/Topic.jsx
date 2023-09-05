import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import TopicNav from "./TopicNav";
import ArticleCard from "./ArticleCard";

export default function Topic() {
  const { topic } = useParams();
  const [topicArticles, setTopicArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    getArticles(topic)
      .then((response) => {
        setTopicArticles(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [topic]);

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return <p>Something went wrong, please refresh the page and try again.</p>;

  return (
    <div>
      <TopicNav />
      <section className="articleList">
        {topicArticles.map((article) => (
          <ArticleCard key={article.article_id} articleInfo={article} />
        ))}
      </section>
    </div>
  );
}

import { getArticles } from "../../utils/api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    getArticles()
      .then((response) => {
        setAllArticles(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <section className="articleList">
      {allArticles.map((article) => (
        <ArticleCard key={article.article_id} articleInfo={article} />
      ))}
    </section>
  );
}

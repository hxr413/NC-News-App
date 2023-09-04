import axios from "axios";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://nc-news-api-8tl9.onrender.com/api/articles")
      .then(({ data }) => {
        setAllArticles(data.articles);
      });
  }, []);

  return (
    <section>
      {allArticles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </section>
  );
}

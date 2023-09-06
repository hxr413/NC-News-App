import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import TopicNav from "./TopicNav";
import Sort from "./Sort";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const { topic } = useParams();
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const [allArticles, setAllArticles] = useState([]);

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  /*
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order"); 

  useEffect(() => {
    getArticlesWithQueries(sortByQuery,orderQuery)
  }, [sortByQuery, orderQuery]);
  */

  useEffect(() => {
    getArticles({ topic: topic, sort_by: sort, order: order })
      .then((response) => {
        setAllArticles(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [topic, sort, order]);

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return <p>Something went wrong, please refresh the page and try again.</p>;

  return (
    <div>
      <TopicNav />
      <Sort setSort={setSort} setOrder={setOrder} />
      <section className="articleList">
        {allArticles.map((article) => (
          <ArticleCard key={article.article_id} articleInfo={article} />
        ))}
      </section>
    </div>
  );
}

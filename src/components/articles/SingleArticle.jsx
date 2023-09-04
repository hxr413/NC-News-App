import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../../utils/api";
import ArticleBody from "./ArticleBody";

export default function SingleArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    getArticleById(id)
      .then((response) => {
        setArticle(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div>
      <ArticleBody article={article}/>
    </div>
  );
}

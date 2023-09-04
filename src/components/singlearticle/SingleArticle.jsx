import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../../utils/api";
import ArticleBody from "./ArticleBody";
import ArticleVote from "./ArticleVote";
import ArticleComment from "./ArticleComment";

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
        setError(true);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return (
      <p>Sorry, something went wrong, please refresh the page and try again.</p>
    );

  return (
    <div>
      <ArticleBody article={article} />
      <ArticleVote votes={article.votes} id={id} />
      <ArticleComment article={article} id={id} />
    </div>
  );
}

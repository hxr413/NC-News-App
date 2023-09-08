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
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    getArticleById(id)
      .then((response) => {
        setArticle(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        if (err.response.data.message === "article does not exist")
          setErrMsg("404 - The article you looked for does not exist.");
        else
          setErrMsg(
            "Something went wrong, please refresh the page and try again."
          );
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p className="userMsg">Loading...</p>;
  if (isError) return <p className="userMsg">{errMsg}</p>;

  return (
    <div id="singleArticle">
      <ArticleBody article={article} />
      <ArticleVote votes={article.votes} id={id} />
      <ArticleComment article={article} id={id} />
    </div>
  );
}

import { useEffect, useState } from "react";
import { getCommentsById } from "../../utils/api";
import CommentCard from "./CommentCard";

export default function ArticleComment({ article, id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    getCommentsById(id)
      .then((response) => {
        setComments(response);
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
    <section className="commentList">
      <h3>{article.comment_count} Comments</h3>
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </section>
  );
}

import { useEffect, useState } from "react";
import { getCommentsById } from "../../utils/api";
import CommentCard from "./CommentCard";

export default function ArticleComment({ id }) {
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
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
      <section className="commentList">
      <h3>Comments</h3>
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </section>
  );
}

import { useEffect, useState } from "react";
import { getCommentsById } from "../../utils/api";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

export default function ArticleComment({ article, id }) {
  const [comments, setComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(article.comment_count);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [commentAdded, setCommentAdded] = useState(false);

  useEffect(() => {
    setCommentAdded(false);
    getCommentsById(id)
      .then((response) => {
        setComments(response);
        setCommentsCount(response.length)
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [commentAdded]);

  if (isLoading) return <p className="userMsg">Loading...</p>;
  if (isError)
    return <p className="userMsg">Something went wrong, please refresh the page and try again.</p>;

  return (
    <div>
      <AddComment
        id={id}
        setComments={setComments}
        setCommentsCount={setCommentsCount}
        setCommentAdded={setCommentAdded}
      />
      <section className="commentList">
        <h3>{commentsCount} Comments</h3>
        {comments.map((comment) => (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            setComments={setComments}
            setCommentsCount={setCommentsCount}
          />
        ))}
      </section>
    </div>
  );
}

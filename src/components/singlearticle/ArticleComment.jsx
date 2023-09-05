import { useEffect, useState } from "react";
import { getCommentsById } from "../../utils/api";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

export default function ArticleComment({ article, id }) {
  const [comments, setComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(article.comment_count);
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
    return <p>Something went wrong, please refresh the page and try again.</p>;

  return (
    <div>
      <AddComment
        id={id}
        setComments={setComments}
        setCommentsCount={setCommentsCount}
      />
      <section className="commentList">
        <h3>{commentsCount} Comments</h3>
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </section>
    </div>
  );
}

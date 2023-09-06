import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";
import { deleteCommentById } from "../../utils/api";

export default function CommentCard({
  comment,
  setComments,
  setCommentsCount,
}) {
  const { user } = useContext(UserContext);
  const event = new Date(comment.created_at);
  const time = event.toUTCString();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const deleteComment = (id) => {
    if (!navigator.onLine) {
      alert("You are currently offline. Comment cannot be deleted.");
      return;
    }
    if (isSubmitting) {
      setLoading("Deletion in progress, please wait.");
      return;
    }
    setIsSubmitting(true);
    setLoading("Deleting the comment, please wait.");

    setComments((curComments) =>
      curComments.filter((comment) => comment.comment_id !== id)
    );
    setCommentsCount((curCount) => curCount - 1);

    deleteCommentById(comment.comment_id)
      .then(() => {
        setIsSubmitting(false);
        setLoading("Successfully deleted.");
        setTimeout(function () {
          setLoading(null);
        }, 2000);
      })
      .catch((err) => {
        setError("Something went wrong, please try again.");
        setComments((curComments) => curComments.unshift(comment));
        setCommentsCount((curCount) => curCount + 1);
      });
  };

  return (
    <div>
      <article className="commentCard">
        <h4>From {comment.author}:</h4>
        <p>{comment.body}</p>
        <h5>Posted at {time}</h5>
        <h5>{comment.votes} votes</h5>
        {user === comment.author && (
          <button onClick={() => deleteComment(comment.comment_id)}>
            Delete your comment
          </button>
        )}
      </article>
      {loading !== null ? <p>{loading}</p> : <p>{error}</p>}
    </div>
  );
}

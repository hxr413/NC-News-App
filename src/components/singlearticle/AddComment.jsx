import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";
import { postCommentById } from "../../utils/api";

export default function AddComment({ id, setCommentAdded }) {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const sendComment = (event) => {
    event.preventDefault();

    if (!navigator.onLine) {
      alert("You are currently offline. Comment cannot be submitted.");
      return;
    }

    if (isSubmitting) {
      setLoading("Submission in progress, please wait.");
      return;
    }

    setIsSubmitting(true);
    setLoading("Submitting the comment, please wait.");

    const commentObj = { username: user, body: comment };
    postCommentById(id, commentObj)
      .then(() => {
        setComment("");
        setIsSubmitting(false);
        setCommentAdded(true);
        setLoading("Successfully commented.");
        setTimeout(function () {
          setLoading(null);
        }, 2000);
      })
      .catch((err) => {
        setError("Something went wrong, please try again.");
      });
  };

  return (
    <form className="commentForm" onSubmit={sendComment}>
      <label htmlFor="comment">
        <h4>Comment as {user}</h4>
      </label>
      <input
        id="comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        type="text"
        required
      />
      {loading !== null ? <p>{loading}</p> : <p>{error}</p>}
      <button type="submit">Comment</button>
    </form>
  );
}

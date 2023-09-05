import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";
import { postCommentById } from "../../utils/api";

export default function AddComment({ id, setComments, setCommentsCount }) {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const sendComment = (event) => {
    event.preventDefault();
    setLoading("Sending the comment, please wait.");

    const date = new Date();
    const localComment = {
      author: user,
      body: comment,
      votes: 0,
      comment_id: date.getTime(),
      created_at: date,
    };
    setComments((curComments) => [localComment, ...curComments]);
    setCommentsCount((curCount) => curCount + 1);

    const commentObj = { username: user, body: comment };
    postCommentById(id, commentObj)
      .then(() => {
        setLoading("Successfully commented.");
        setTimeout(function () {
          setLoading(null);
        }, 2000);
      })
      .catch((err) => {
        setError("Something went wrong, please try again.");
        setComments((curComments) => curComments.shift());
        setCommentsCount((curCount) => curCount - 1);
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
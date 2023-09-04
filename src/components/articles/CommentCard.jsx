export default function CommentCard({ comment }) {
  const time =
    comment.created_at.slice(0, 10) + " " + comment.created_at.slice(11, 16);

  return (
    <article className="commentCard">
      <h4>From {comment.author}:</h4>
      <p>{comment.body}</p>
      <h5>Posted at {time}</h5>
      <h5>{comment.votes} votes</h5>
    </article>
  );
}
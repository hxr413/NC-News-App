export default function CommentCard({ comment }) {
  const event = new Date(comment.created_at);
  const time = event.toUTCString();

  return (
    <article className="commentCard">
      <h4>From {comment.author}:</h4>
      <p>{comment.body}</p>
      <h5>Posted at {time}</h5>
      <h5>{comment.votes} votes</h5>
    </article>
  );
}

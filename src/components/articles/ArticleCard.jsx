import { Link } from "react-router-dom";
export default function ArticleCard({ articleInfo }) {
  const event = new Date(articleInfo.created_at);
  const time = event.toUTCString();

  return (
    <article className="articleCard">
      <img src={articleInfo.article_img_url} alt={articleInfo.title} />
      <h3>{articleInfo.title}</h3>
      <p>
        <strong>Author:</strong> {articleInfo.author}
      </p>
      <p>
        <strong>Topic:</strong> {articleInfo.topic}
      </p>
      <p>Created at {time}</p>
      <p>
        {articleInfo.comment_count} comments, {articleInfo.votes} votes
      </p>
      <p>
        <Link to={`/articles/${articleInfo.article_id}`}>
          View this article
        </Link>
        👉
      </p>
    </article>
  );
}

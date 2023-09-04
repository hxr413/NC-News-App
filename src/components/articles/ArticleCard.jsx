export default function ArticleCard({ articleInfo }) {
  const time =
    articleInfo.created_at.slice(0, 10) +
    " " +
    articleInfo.created_at.slice(11, 16);

  return (
    <article className="articleCard">
      <img src={articleInfo.article_img_url} alt={articleInfo.title} />
      <h3>{articleInfo.title}</h3>
      <p>
        <b>Author:</b> {articleInfo.author}
      </p>
      <p>
        <b>Topic:</b> {articleInfo.topic}
      </p>
      <p>Created at {time}</p>
      <p>
        {articleInfo.comment_count} comments, {articleInfo.votes} votes
      </p>
      <p>View this article👉</p>
    </article>
  );
}

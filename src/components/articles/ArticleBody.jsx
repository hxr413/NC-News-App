export default function ArticleBody({ article }) {
  const time =
    article.created_at.slice(0, 10) + " " + article.created_at.slice(11, 16);
  return (
    <article className="singleArticleBody">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={article.title} />
      <h4>By {article.author}</h4>
      <h5>Created at {time}</h5>
      <p>{article.body}</p>
      <h5>Votes: {article.votes}</h5>
      <h5>Comments: {article.comment_count}</h5>
    </article>
  );
}

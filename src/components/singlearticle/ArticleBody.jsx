export default function ArticleBody({ article }) {
  const event = new Date(article.created_at);
  const time = event.toUTCString();

  return (
    <article className="singleArticleBody">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={article.title} />
      <h4>By {article.author}</h4>
      <h5>Created at {time}</h5>
      <p>{article.body}</p>
    </article>
  );
}

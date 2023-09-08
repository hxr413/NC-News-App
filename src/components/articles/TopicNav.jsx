import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../../utils/api";

export default function SelectTopic() {
  const [allTopics, setAllTopics] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    getTopics()
      .then((response) => {
        setAllTopics(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p className="userMsg">Loading...</p>;
  if (isError)
    return <p className="userMsg">Something went wrong, please refresh the page and try again.</p>;

  return (
    <nav className="selectTopic">
      <p>Select a topic</p>
      <ul>
        <li id="topicLink">
          <Link to="/">ALL</Link>
        </li>
        {allTopics.map(({ slug }) => {
          const path = `/topics/${slug}`;
          return (
            <li key={slug} id="topicLink">
              <Link to={path}>{slug.toUpperCase()}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

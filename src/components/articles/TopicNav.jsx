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

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return <p>Something went wrong, please refresh the page and try again.</p>;

  return (
    <div className="selectTopic">
      <p>Select a topic</p>
      <ul>
        <Link to="/">
          <li>all</li>
        </Link>
        {allTopics.map(({ slug }) => {
          const path = `/${slug}`;
          return (
            <Link to={path} key={slug}>
              <li value={slug}>{slug}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

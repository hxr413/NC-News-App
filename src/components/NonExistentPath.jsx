import { useLocation } from "react-router-dom";

export default function NonExistentPath() {
  const location = useLocation();
  let topicErr = false;
  if (location.pathname.startsWith("/topic")) topicErr = true;

  return (
    <div>
      <h2>404 - Not Found</h2>
      {topicErr ? (
        <p>The topic you looked for does not exist.</p>
      ) : (
        <p>
          The requested URL <strong>{location.pathname}</strong> does not exist.
        </p>
      )}
    </div>
  );
}

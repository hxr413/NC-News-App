import { useLocation } from "react-router-dom";

export default function NonExistentPath() {
  const location = useLocation();

  return (
    <div className="userMsg">
      <h2>404 - Not Found</h2>
      <p>
        The requested URL <strong>{location.pathname}</strong> does not exist.
      </p>
    </div>
  );
}

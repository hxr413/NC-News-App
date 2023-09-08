import "./App.css";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/User";
import Articles from "./components/articles/Articles";
import SingleArticle from "./components/singlearticle/SingleArticle";
import NonExistentPath from "./components/NonExistentPath";

export default function App() {
  const { user } = useContext(UserContext);

  return (
    <div id="App">
      <header>
        <p>You are logged in as {user}</p>
        <h1>Northcoders News</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/topics/:topic" element={<Articles />} />
          <Route path="/articles/:id" element={<SingleArticle />} />
          <Route path="*" element={<NonExistentPath />} />
        </Routes>
      </main>
      <footer id="topicLink">
        <a href="https://github.com/hxr413/NC-News-App/">GitHub repo</a>
      </footer>
    </div>
  );
}

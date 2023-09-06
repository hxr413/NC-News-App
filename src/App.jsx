import "./App.css";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/articles/Articles";
import SingleArticle from "./components/singlearticle/SingleArticle";
import NonExistentPath from "./components/NonExistentPath";

export default function App() {
  return (
    <div id="App">
      <header>
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
    </div>
  );
}

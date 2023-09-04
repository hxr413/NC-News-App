import "./App.css";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/articles/Articles";
import SingleArticle from "./components/articles/SingleArticle"

export default function App() {
  return (
    <div id="App">
      <header>
        <h1>NC News</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:id" element={<SingleArticle />} />
        </Routes>
      </main>
    </div>
  );
}

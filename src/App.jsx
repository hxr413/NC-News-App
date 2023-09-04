import "./App.css";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/articles/Articles";

export default function App() {
  return (
    <div id="App">
      <header>
        <h1>NC News</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Articles />} />
        </Routes>
      </main>
    </div>
  );
}

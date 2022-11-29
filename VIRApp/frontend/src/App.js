import HomePage from "./components/home/HomePage";
import {Routes, Route} from "react-router-dom";
import NewArticle from "./components/new-article/NewArticle";
import Article from "./components/article/Article";
import NotFound from "./components/not-found/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new-article/" element={<NewArticle />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
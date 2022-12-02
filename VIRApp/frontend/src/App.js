import HomePage from "./components/home/HomePage";
import {Routes, Route} from "react-router-dom";
import NewArticle from "./components/new-article/NewArticle";
import Article from "./components/article/Article";
import NotFound from "./components/not-found/NotFound";
import Registration from "./components/auth/Registration";
import Login from "./components/auth/Login";
import AdminPage from "./components/admin/AdminPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/new-article/" element={<NewArticle />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
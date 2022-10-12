import "./styles.scss";
import Login from "./Login";
import Loader from "./Loader";
import PostPage from "./PostPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />}></Route>
          <Route path="/login" exact element={<Login />} />
          <Route path="/homepage" exact element={<HomePage />}></Route>
          <Route path="/homepage/:id" element={<PostPage />}></Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

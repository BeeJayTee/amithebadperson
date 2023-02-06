import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Content from "./components/home/Content";
import Navbar from "./components/home/NavBar";
import AddPost from "./pages/AddPost";
import Post from "./pages/Post";

function App() {
  return (
    <div className="w-screen h-screen bg-[#f8f9fa]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import AddPost from "./pages/AddPost";
import Post from "./pages/Post";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

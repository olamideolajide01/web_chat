import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Message from "./pages/Message";
import Errorpage from "./pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/message" element={<Message />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;

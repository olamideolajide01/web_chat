import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Errorpage from "./pages/Error";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { curUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!curUser) {
      return <Navigate to={"/login"} />;
    } else return children;
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;

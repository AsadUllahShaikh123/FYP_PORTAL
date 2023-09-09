import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/about" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

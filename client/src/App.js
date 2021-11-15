import "./App.css";
import Login from "./Componenets/Login";
import Main from "./Componenets/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Componenets/Home";
import { useSelector } from "react-redux";

function App() {
  const { userInfo } = useSelector((state) => state.userLogin);
  return (
    <div className="App">
      {/* <Main /> */}
      <Router>
        <Routes>
          <Route path="/" element={userInfo === null ? <Main /> : <Home />} />

          <Route path="/register" element={<Main />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

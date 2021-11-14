import "./App.css";
import Login from "./Componenets/Login";
import Main from "./Componenets/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <Router>
        <Routes>
          {/* <Route path="/" exact>
            
          </Route> */}
          <Route path="/register" element={<Main />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

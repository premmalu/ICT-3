import Main from "./Components/Home/Home"
import {Routes,Route} from "react-router-dom"
import Navbar from "./Components/navbar/navbar";
import Login from "./Components/login/Login";
import Home from "./Components/Home/Home"
import Register from "./Components/registration/Register";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>

    </div>
  );
}

export default App;

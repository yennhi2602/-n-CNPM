import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <>
    <Navbar />
    <Routes>
  
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register />} />
    </Routes>
    </>
  );
}

export default App;
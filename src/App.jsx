import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Register from "./register.jsx";
import Login from "./Login.jsx";
import AddItem from "./AddItem.jsx";
import Item from "./Items.jsx";



function App() {
  
  return( 
    <>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/> 
          <Route path="/home" element={<Home/>}/>
          <Route path="additem" element={<AddItem/>}/>
          <Route path="/list" element={<Item/>}/>
        </Routes>
    </>
  )
}

export default App

import "./assets/css/style.css"
import './App.css'
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import Register from "./components/Register"


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes >
     <Route path="/" element={<Home/>}/>
     <Route path="/register" element={<Register/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App

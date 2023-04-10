import Header from './components/Header';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <>
     
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
      <Footer />

    </>

  )
}

export default App;

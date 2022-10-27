import logo from './logo.svg';
import './App.css';
import './main.scss'
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./Pages/Home";
import Projects from './Pages/Projects';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />

        
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;

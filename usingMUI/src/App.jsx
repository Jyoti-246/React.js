import Mui from "../mui/Mui.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Team from './Pages/Team';
import Course_Details from './Pages/Course_Details'
import Navbar from "./Components/Navbar.jsx";
import Profile from "./Pages/Profile.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import IndianGov from "../Home/IndianGov.jsx";

const App = () => {
  const money = 10000;
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<IndianGov money={money}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/courses" element={<Product/>}/>
            <Route path="/team" element={<Team/>}/>   
            <Route path="/courses/:id" element={<Course_Details/>}/>
            <Route path="/mui" element={<Mui/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

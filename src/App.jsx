import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Home from "./Pages/Home";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
 
    const  navigate  = useNavigate();
  
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, [navigate]);
  
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
  return (
   
      <div className="container  mx-auto border">
     

        <Routes>
          <Route path="/" element={<Home scrollToSection={scrollToSection}/>} />
          {/* <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/CaseStudy" element={<CaseStudy/>} />
          <Route path="/Contact-Us" element={<ContactUs />} /> */}
        </Routes>
        <Footer />
      </div>

  );
}

export default App;

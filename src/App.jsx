import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Footer from "./components/Footer";
import ContactUs from "./Pages/ContactUs";
import CaseStudy from "./Pages/CaseStudy";

function App() {
 
  return (
    <BrowserRouter>
      <div className="container  mx-auto border">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/CaseStudy" element={<CaseStudy/>} />
          <Route path="/Contact-Us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

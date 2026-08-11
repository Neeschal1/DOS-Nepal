import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuccessStories from "./pages/successStories/success";
import Landing from "./pages/landing/landing";
import Portals from "./pages/jobPortals/portals";
import Courses from "./pages/courses/courses";
import Aboutus from "./pages/aboutus/aboutus";
import AllExperts from "./pages/allExperts/allExperts";
import SingleServices from "./pages/services/singleService";
import ScrollToTop from "./constants/scroll";
import ContactUs from "./pages/contacts/contactUs";
import Login from "./pages/accounts/login";
import Signup from "./pages/accounts/signup";
import Help from "./pages/support/help";
import Security from "./pages/support/security";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/job-portals" element={<Portals />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/home/all-experts" element={<AllExperts />} />
        <Route path="/available-courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/available-courses/services" element={<SingleServices />}/>
        <Route path="/support/help" element={<Help />}/>
        <Route path="/support/security" element={<Security />}/>
      </Routes>
    </Router>
  );
}

export default App;

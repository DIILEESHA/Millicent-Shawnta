import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery"; // You'll need to create this component
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Wedding from "./pages/wedding/Wedding";
import Rsvp from "./pages/rsvp/Rsvp";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/rsvp" element={<Rsvp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

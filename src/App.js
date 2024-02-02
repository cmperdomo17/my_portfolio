import React from "react";
import { ThemeProvider } from './components/Theme';

import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import AboutMe from "./components/About";
import Contact from "./components/Contact";


import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <ThemeProvider>
                <NavBar />     
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </ThemeProvider>
        </Router>
    );
};

export default App;
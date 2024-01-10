import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";
import { ThemeProvider } from './components/Theme';

const App = () => {
    return (
        <ThemeProvider>
            <NavBar />
            <Home />
            <Footer />
        </ThemeProvider>
    )
}

export default App;
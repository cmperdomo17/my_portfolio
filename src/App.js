import Home from "./components/Home";
import NavBar from "./components/Navbar";
import React from "react";
import { ThemeProvider } from './components/Theme';

const App = () => {
    return (
        <ThemeProvider>
            <NavBar />
            <Home />
        </ThemeProvider>
    )
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* path='*' fonctionne si jamais l'url ne correspond à rien de déclaré au dessus. */}
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

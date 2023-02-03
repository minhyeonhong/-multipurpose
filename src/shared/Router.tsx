import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Stopwatch from "../pages/Stopwatch";
import Countdown from "../pages/Countdown";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Stopwatch />} />
                <Route path="/countdown" element={<Countdown />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
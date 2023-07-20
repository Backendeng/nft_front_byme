import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Swap from './swap';
import Swapview from './Swapview';

const SwapRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Swap />} />
                <Route path="/swap" element={<Swapview />} />
            </Routes>
        </BrowserRouter>
    );
};

export default SwapRouter;

// src/App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginSignup from "./Components/LoginSignup/LoginSignup.jsx"
import PdfUpload from "./Components/PdfUpload/PdfUpload.jsx"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/pdfUpload" element={<PdfUpload />} />
                <Route path="/" element={<LoginSignup />} />
            </Routes>
        </Router>
    )
}

export default App

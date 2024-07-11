// src/Components/PdfUpload/PdfUpload.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import './PdfUpload.css';

const PdfUpload = () => {
    const [userName, setUserName] = useState("Taha"); 
    const [file, setFile] = useState(null);
    const [text, setText] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile && uploadedFile.type === "application/pdf") {
            setFile(uploadedFile);
            setMessage("PDF uploaded: " + uploadedFile.name);
        } else {
            setMessage("Please upload a valid PDF file.");
        }
    };

    const handleUpload = async () => {
        if (file) {
            const formData = new FormData();
            formData.append("pdf", file);
            
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            setText(result.text);
        }
    };

    return (
        <div>
            <Header userName={userName} onLogout={handleLogout} />
            <div className="pdf-upload-container">
                <h1>PDF Upload Page</h1>
                <input type="file" accept="application/pdf" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
                {message && <p>{message}</p>}
                {text && <pre>{text}</pre>}
            </div>
        </div>
    );
};

export default PdfUpload;

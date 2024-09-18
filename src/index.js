import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter hashType="noslash">
        <StyledEngineProvider injectFirst>
            <App />
        </StyledEngineProvider>
    </HashRouter>






);

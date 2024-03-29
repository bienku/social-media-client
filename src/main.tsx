import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import StoreProvider from './providers/storeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </React.StrictMode>
);

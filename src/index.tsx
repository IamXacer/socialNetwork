import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/redux-store'; // Импортируем store

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

// Вызов функции для рендеринга
rerenderEntireTree();

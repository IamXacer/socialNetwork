import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/redux-store';
import {StoreContext} from "./StoreContext";
import {Provider} from "react-redux"; // Импортируем store

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>

        </React.StrictMode>
    );


// Вызов функции для рендеринга

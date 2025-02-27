import React from 'react';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { MyPosts } from "./components/Profile/MyPosts/MyPosts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'; // Импортируй Provider
import { store } from './redux/redux-store';
/*import {MyPostsContainer} from "./components/Profile/MyPosts/MyPostsContainer";*/

import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import MyPostsContainer from "./components/Profile/MyPosts/MyPostsContainer";
import {Users} from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer"; // Импортируй store из Redux

type AppProps = {

/*    addMessage: (message: string) => void;*/
};

function App() {
    return (
        <Provider store={store}> {/* Оборачиваем все приложение в Provider */}
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header />
                    <NavBar />
                    <div className='profileWrapperContent'>
                        <Routes>
                            <Route path="/profile" element={
                                <MyPostsContainer/>
                            } />
                            <Route path="/dialog/*" element={<DialogsContainer />} />
                            <Route path="/users/*" element={<UsersContainer />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

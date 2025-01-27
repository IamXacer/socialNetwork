import React from 'react';
import './App.css';
<<<<<<< HEAD
import { Dialogs } from './components/Dialogs/Dialogs';
=======
import {Dialogs} from './components/Dialogs/Dialogs';
>>>>>>> 52988fd (Инициализация проекта и добавление файлов)
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {MyPosts} from "./components/Profile/MyPosts/MyPosts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
<<<<<<< HEAD
import {dialogItem, friends, Messages, posts} from "./redux/state";
=======
import {dialogItem, friends,state} from "./redux/state";
>>>>>>> 52988fd (Инициализация проекта и добавление файлов)

function App() {
    return (
        <BrowserRouter>
<<<<<<< HEAD
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='profileWrapperContent'>
                <Routes>
                    <Route path="/profile" element= { <MyPosts
                        posts={posts}
                    />}/>
                <Route path="/dialog/*" element= {<Dialogs dialogItem={dialogItem}
                                                           friends={friends}
                                                           Messages={Messages}/>}/>
                </Routes>
            </div>
        </div>
=======
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='profileWrapperContent'>
                    <Routes>
                        <Route path="/profile" element={<MyPosts state={state} />}/>
                        <Route path="/dialog/*"
                               element={<Dialogs
                                   dialogItem={dialogItem}
                                    friends={friends}
                                    state={state}
                               />}/>
                    </Routes>
                </div>
            </div>
>>>>>>> 52988fd (Инициализация проекта и добавление файлов)
        </BrowserRouter>
    );
}

export default App;

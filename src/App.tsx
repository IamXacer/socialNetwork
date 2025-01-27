import React from 'react';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {MyPosts} from "./components/Profile/MyPosts/MyPosts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {dialogItem, friends, Messages, posts} from "./redux/state";

function App() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;

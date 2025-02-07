import React from 'react';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {MyPosts} from "./components/Profile/MyPosts/MyPosts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { addMessage, StateType} from "./redux/state";

type AppProps = {
    /*addPost:(postMassage:string)=>void;*/
    state: StateType;
   /* addDialogItem:(name: string)=>void;*/
    addMessage:(message:string)=>void;
}
function App(props: AppProps) {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='profileWrapperContent'>
                <Routes>
                    <Route path="/profile" element= { <MyPosts
                      /*  addPost={props.addPost}*/
                        state={props.state}
                    />}/>
                <Route path="/dialog/*" element= {<Dialogs state={props.state}
                                                          /* addDialogItem={addDialogItem}*/
                                                           addMessage={addMessage}
                />}/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;

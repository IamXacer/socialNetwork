import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addDialogItem, addMessage, addPost, state, StateType} from "./redux/state";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let rerenderEntireTree = (state:StateType)=>{
    root.render(
      <React.StrictMode>
        <App  addPost={addPost} state={state} addDialogItem={addDialogItem}
              addMessage={addMessage}
        />
      </React.StrictMode>
    )
}
/*root.render(
  <React.StrictMode>
    <App  addPost={addPost}/>
  </React.StrictMode>
);*/
rerenderEntireTree(state)

reportWebVitals();

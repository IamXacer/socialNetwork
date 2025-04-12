import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Импортируй Provider
import { store } from "./redux/redux-store";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import MyPostsContainer from "./components/Profile/MyPosts/MyPostsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer"; // Импортируй store из Redux

type AppProps = {
  /*    addMessage: (message: string) => void;*/
};

function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Оборачиваем все приложение в Provider */}
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className="profileWrapperContent">
            <Routes>
              <Route path="/profile/*" element={<ProfileContainer />} />
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

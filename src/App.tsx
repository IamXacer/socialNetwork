import React from "react";
import "./App.css";
import { HeaderContainer } from "./components/Header/HeaderContainer"; // Импортируем HeaderContainer
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Импортируем Provider
import { store } from "./redux/redux-store";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import MyPostsContainer from "./components/Profile/MyPosts/MyPostsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

type AppProps = {
  /*    addMessage: (message: string) => void;*/
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-wrapper">
          {/* HeaderContainer будет автоматически подключен через connect */}
          <HeaderContainer />
          <NavBar />
          <div className="profileWrapperContent">
            <Routes>
              <Route path={"/profile/:userId?"}>
                <Route index element={<ProfileContainer />} />
                <Route path=":userId" index element={<ProfileContainer />} />
              </Route>
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

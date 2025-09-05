import React, { useEffect } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Импортируем Provider
import { store } from "./redux/redux-store";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import MyPostsContainer from "./components/Profile/MyPosts/MyPostsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { UsersContainer } from "./components/Users/UsersContainer";

// Импортируем функцию updateArray
import { updateArray } from "./utils"; // Укажите путь к файлу utils.ts

type AppProps = {
  /* addMessage: (message: string) => void; */
};

function App() {
  // Добавляем useEffect, чтобы увидеть сообщение при монтировании компонента
  useEffect(() => {
    console.log("App component mounted");

    // Пример использования функции updateArray
    const stringArray = ["apple", "banana", "cherry"];
    console.log(updateArray(stringArray, "banana")); // ['apple', 'banana', 'cherry']
    console.log(updateArray(stringArray, "strawberry")); // ['apple', 'banana', 'cherry', 'strawberry']

    const numberArray = [1, 2, 3];
    console.log(updateArray(numberArray, 2)); // [1, 2, 3]
    console.log(updateArray(numberArray, 4)); // [1, 2, 3, 4]
  }, []); // Пустой массив [] означает, что эффект будет срабатывать только при монтировании компонента

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-wrapper">
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

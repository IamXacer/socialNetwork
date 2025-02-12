import React, {ChangeEvent, useReducer, useState} from "react";
import styled from "styled-components";
import { DialogsItem, Message, FriendsPhotoGrid } from "./DialogItem/DialogsItem";
import { useSelector, useDispatch } from "react-redux"; // Импортируем useSelector и useDispatch
/*import { StateType } from "../../redux/state"; // Тип состояния*/
import {addDialogMessageAC, addNameAC, DialogsReducer, DialogsReducerType} from "../../redux/Dialogs-reducer";
import {RootState} from "../../redux/redux-store"; // Экшены и редюсер

export const Dialogs = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch(); // Подключаем dispatch для отправки экшенов

    // Получаем данные из Redux через useSelector, добавляем дефолтное значение
    const dialogsState = useSelector((store: RootState) => store.dialogPage.dialogPage);

    const { dialogItems, messages, friends } = dialogsState;

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setName(e.currentTarget.value);
    };
    const dialogItemsList = Array.isArray(dialogItems) && dialogItems.length > 0 ? (
        <DialogsItem dialogItems={dialogItems} />
    ) : (
        <p>No dialogs available</p>
    );

    const messagesList = Array.isArray(messages) && messages.length > 0 ? (
        <Message Messages={messages} />
    ) : (
        <p>No messages available</p>
    );

    const friendsList = Array.isArray(friends) && friends.length > 0 ? (
        <FriendsPhotoGrid friends={friends} />
    ) : (
        <p>No friends available</p>
    );

    const handleAddName = () => {
        if (name.trim() !== "") {
            dispatch(addNameAC(name)); // Отправляем экшен для добавления имени
            setName("");
        }
    };

    const handleAddMessage = () => {
        if (message.trim() !== "") {
            dispatch(addDialogMessageAC(message)); // Отправляем экшен для добавления сообщения
            setMessage("");
        }
    };

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value);
    };

    const RightSection = styled.div`
        display: flex;
        justify-content: flex-end;
        width: 50%;
    `;

    return (
        <DialogsContainer>
            <DialogsWrapper>
                <DialogsItems>
                    {dialogItemsList}
                </DialogsItems>
                <MessagesContainer>
                    {messagesList}
                </MessagesContainer>
                <TextAreaContainer>
                    <StyledTextArea
                        value={name}
                        onChange={handleTextChange}
                        placeholder="Enter your name..."
                    />
                    <StyledTextArea
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Enter a message..."
                    />
                    <ButtonContainer>
                        <StyledButton onClick={handleAddName}>Add Name</StyledButton>
                        <StyledButton onClick={handleAddMessage}>Add Post</StyledButton>
                    </ButtonContainer>
                </TextAreaContainer>
            </DialogsWrapper>

            <RightSection>
                <FriendsSection>
                    <MyPhotos>
                        <h3>My Photos</h3>
                        <PhotoGrid>
                            <Photo src="https://html.crumina.net/html-olympus/img/last-photo10-large.webp" alt="My Photo 1" />
                            <Photo src="https://html.crumina.net/html-olympus/img/last-phot11-large.webp" alt="My Photo 2" />
                            <Photo src="https://html.crumina.net/html-olympus/img/last-phot12-large.webp" alt="My Photo 3" />
                            <Photo src="https://html.crumina.net/html-olympus/img/last-phot13-large.webp" alt="My Photo 4" />
                            <Photo src="https://html.crumina.net/html-olympus/img/last-phot14-large.webp" alt="My Photo 5" />
                            <Photo src="https://html.crumina.net/html-olympus/img/last-phot16-large.webp" alt="My Photo 6" />
                        </PhotoGrid>
                    </MyPhotos>

                    <FriendsInfo>
                        <h3>Friends (86)</h3>
                        {friendsList}
                    </FriendsInfo>
                </FriendsSection>
            </RightSection>
        </DialogsContainer>
    );
};

// Styled components for the layout
const DialogsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const DialogsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 30px;
`;

const DialogsItems = styled.div`
    width: 48%;
    padding: 15px;
`;

const MessagesContainer = styled.div`
    width: 48%;
    padding: 15px;
    display: flex;
    flex-direction: column;
`;

const TextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    gap: 10px;
    margin-right: 320px;
    width: 40%;
`;

const StyledTextArea = styled.textarea`
    padding: 12px;
    margin: 5px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
    resize: none;
    background-color: #f9f9f9;
    color: #333;

    &:focus {
        outline: none;
        border-color: #4e9bff;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-start;
`;

const StyledButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    background-color: #4e9bff;
    color: white;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #3a7db2;
    }

    &:active {
        background-color: #2e5f8f;
    }
`;

const FriendsSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    flex-wrap: wrap;
    gap: 15px;
    width: 100%;
`;

const MyPhotos = styled.div`
    width: 80%;
    padding: 0 15px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const FriendsInfo = styled.div`
    width: 48%;
    padding: 0 15px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-top: 15px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const Photo = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
`;

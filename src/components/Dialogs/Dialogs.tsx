import React, {ChangeEvent} from "react";
import styled from "styled-components";
import { DialogsItem, Message, FriendsPhotoGrid } from "./DialogItem/DialogsItem";
import { StateType } from "../../redux/state";

// Типы для props
export type DialogsType = {
    state: StateType;
    addDialogItem:(name: string)=>void;
    addMessage:(message: string)=>void;
};

export const Dialogs = (props: DialogsType) => {
   const [name, setName] = React.useState("");
   const [message, setMessage] = React.useState("");
    let handleTextChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setName(e.currentTarget.value)
    }
    let handleAddName = ()=>{
        if(name.trim()  !==''){
            props.addDialogItem(name)
            setName("")
        }
    }
    let handleAddMessage = ()=>{
        if(message.trim()  !==''){
            props.addMessage(message)
            setMessage("")
        }
    }
    let handleMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }
    return (
        <DialogsContainer>
            <DialogsWrapper>
            <DialogsItems>
                <DialogsItem dialogItems={props.state.dialogPage.dialogItems} />
            </DialogsItems>
            <MessagesContainer>
                <Message Messages={props.state.dialogPage.messages} />
            </MessagesContainer>
             <TextAreaContainer>
                 <textarea value={name} onChange={handleTextChange} placeholder={'Enter you name...'}/>
                 <textarea value={message} placeholder={'Enter a message...'} onChange={handleMessageChange}/>
             </TextAreaContainer>
                <div>
                    <button onClick={handleAddName }>AddName</button>
                    <button onClick={handleAddMessage }>AddPost</button>
                </div>
        </DialogsWrapper>

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
                    <FriendsPhotoGrid friends={props.state.dialogPage.friends} />
                </FriendsInfo>
            </FriendsSection>
        </DialogsContainer>
    );
};


// Стили для контейнеров
const TextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const DialogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const DialogsWrapper = styled.div`
    display: flex;
    justify-content: space-between; /* Keeps elements apart */
    padding: 15px;
    position: relative; /* Makes MyPhotos positioned correctly */
`;
const DialogsItems = styled.div`
  width: 70%; /* Оставляем пространство для диалогов */
  padding: 15px;
`;


const MessagesContainer = styled.div`
    width: 70%; /* Оставляем пространство для сообщений */
    padding: 15px;
    display: flex;
    flex-direction: column; /* Сообщения внутри контейнера */
`;

const FriendsSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    flex-wrap: wrap; /* Allow content to wrap */
    gap: 15px;
    width: 100%; /* Ensure it stretches across the full width */
`;


const MyPhotos = styled.div`
    width: 48%; /* Default width for larger screens */
    padding: 0 15px;

    /* For smaller tablets and below */
    @media (max-width: 768px) {
        width: 100%; /* Take full width on smaller screens */
    }
`;
const FriendsInfo = styled.div`
    width: 48%; /* Default width for larger screens */
    padding: 0 15px;

    /* For smaller tablets and below */
    @media (max-width: 768px) {
        width: 100%; /* Take full width on smaller screens */
    }
`;
const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 columns on larger screens */
    gap: 8px;
    margin-top: 15px;

    /* For tablets, switch to 3 columns */
    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    /* For smaller tablets and below, change to 2 columns */
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    /* For mobile, change to 1 column */
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

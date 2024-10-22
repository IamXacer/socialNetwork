import React from "react";


 export type postsType = {
    id:number,
    message:string,
    initialLikeCount:number
}
export const posts :postsType[] = [
    {id:1,message:'Hi, how are you',initialLikeCount:1},
    {id:2,message:'Ist my progect',initialLikeCount:2},
    {id:3,message:'Hi',initialLikeCount:5},
]
 export type friendType = {
     src:string,
     alt:string
 }
export  const friends:friendType[] = [
    { src: "https://html.crumina.net/html-olympus/img/avatar38-sm.webp", alt: "Friend 1" },
    { src: "https://html.crumina.net/html-olympus/img/avatar24-sm.webp", alt: "Friend 2" },
    { src: "https://html.crumina.net/html-olympus/img/avatar36-sm.webp", alt: "Friend 3" },
    { src: "https://html.crumina.net/html-olympus/img/avatar35-sm.webp", alt: "Friend 4" },
    { src: "https://html.crumina.net/html-olympus/img/avatar34-sm.webp", alt: "Friend 5" },
    { src: "https://html.crumina.net/html-olympus/img/avatar33-sm.webp", alt: "Friend 6" },
    { src: "https://html.crumina.net/html-olympus/img/avatar28-sm.webp", alt: "Friend 7" },
    { src: "https://html.crumina.net/html-olympus/img/avatar25-sm.webp", alt: "Friend 8" },
    { src: "https://html.crumina.net/html-olympus/img/avatar45-sm.webp", alt: "Friend 9" },
];
 export type dialogItemType ={
     id:number,
     name:string
 }
 export const dialogItem:dialogItemType[] =  [
     { id: 1, name: "Dimich" },
     { id: 2, name: "Sasha" },
     { id: 3, name: "Sveta" },
     { id: 4, name: "Viktor" },
     { id: 5, name: "Valery" },
 ];
export type MessagesType ={
    id:number,
    message:string
}

export const Messages:MessagesType[] = [
    {id: 1,message: 'Hi',},
    {id: 2,message: 'How are you',},
    {id: 3,message: 'Yo',},
    {id: 4,message: 'Yo',},
    {id: 5,message: 'Yo',},

]

import { Avatar } from "@material-ui/icons";
import React, { useState } from 'react';
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocame";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./Stateprovider";
import db from './firebase';
import firebase from "firebase";

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = userState('');
    const [imageUrl, setImageUrl] = userState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.fieldValue.serverTimestamp(),
            prrofilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });

        setInput("");
        setImageUrl("");
    };
    
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar scr={user.photoURL}/>
                <form>
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={"What's on your mind?", $(user.displayName)}
                    />

                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        placeholder="image URL (Optional)" />

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>   
        </div>
    );
}

export default MessageSender;

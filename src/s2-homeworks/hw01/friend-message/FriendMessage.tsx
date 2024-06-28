import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from '../HW1';


export type FriendMessageType ={
    message:MessageType
}
const FriendMessage = (props: FriendMessageType) => {
    const { message } = props;
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <div className={s.friendFotoWrapper} >
                    <img
                        id={'hw1-friend-avatar-' + props.message.id}
                        src={message.user.avatar}
                        alt="friend avatar"
                    />
                    <div
                        id={'hw1-friend-time-' + props.message.id}
                        className={s.friendTime}
                    >
                        <span>{message.message.time}</span>
                    </div>
                </div>
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        <span>{message.user.name}</span>
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        <span>{message.message.text}</span>
                    </pre>
                </div>
            </div>

        </div>
    )
}

export default FriendMessage

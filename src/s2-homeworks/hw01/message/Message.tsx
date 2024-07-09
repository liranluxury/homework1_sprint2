import React from 'react'
import s from './Message.module.css'
import {MessageType} from '../HW1';


export type MessagePropsType = {
    message:MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    const { message } = props;
    return (
        <div id={'hw1-message-' + message.id} className={s.message}>
            <div className={s.imageAndText}>
                <div className={s.fotoWrapper}>

                    <img
                    id={'hw1-avatar-' + message.id}
                    src={message.user.avatar}
                    alt="avatar"
                />
                    <div id={'hw1-time-' + message.id} className={s.time}>
                        <span>{message.message.time}</span>
                    </div>

                </div>
                <div className={s.text}>
                    <div id={'hw1-name-' + message.id} className={s.name}>
                        <span>{message.user.name}</span>
                    </div>
                    <pre id={'hw1-text-' + message.id} className={s.messageText}>
                       <span>{message.message.text}</span>
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default Message

import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback:(e: ChangeEvent<HTMLInputElement>) => void//Функция для обработки изменения текста в поле ввода.
    addUser: () => void// Функция для добавления пользователя.
    onBlur:  () => void // Функция, вызываемая при потере фокуса элементом ввода.
    onEnter:  (e: KeyboardEvent<HTMLInputElement>) => void // Функция, вызываемая при нажатии клавиши в поле ввода.
    error: string | null // Сообщение об ошибке или null, если ошибок нет.
    totalUsers: number // Общее количество добавленных пользователей.
    lastUserName?: string //  Имя последнего добавленного пользователя (опционально).
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    const inputClass =error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <input
                        id={'hw3-input'}
                        value={name}
                        onChange={setNameCallback}
                        className={inputClass}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                    />
                    <div id={'hw3-error'} className={s.error}>
                        {error}
                    </div>
                </div>

                <button
                    id={'hw3-button'}
                    onClick={addUser}
                    className={s.button}
                    disabled={!name.trim()}
                >
                    add
                </button>
            </div>

            {lastUserName && (
                <div className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </div>
            )}
        </div>
    )
}

export default Greeting

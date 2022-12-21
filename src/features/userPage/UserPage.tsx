import React, {ChangeEvent, useState} from "react";
import style from './UserPage.module.css'
import inputStyle from '../../common/style/CommonStyles.module.css'

type UserPagePropsType = {
    userName: string
    userAuth: (status: boolean) => void
    addUserName: (userName: string) => void
}

export const UserPage = (props: UserPagePropsType) => {

    const [newName, setNewName] = useState<string>(props.userName);
    const [error, setError] = useState<string>('');

    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.currentTarget.value.trim())
    }

    const onClickHandler = () => {
        if (newName) {
            props.addUserName(newName);
            props.userAuth(true);
            setNewName('')
        } else {
            setError('Поле обязательно к заполнению')
        }
    }

    return <div className={style.userPageContainer}>
        <h1>{'Введите своё имя'}</h1>
        <input value={newName}
               onChange={onInputChangeHandler}
               className={inputStyle.customInput}/>
        {error ? <div className={style.error}>{error}</div> : null}
        <button onClick={onClickHandler}
                className={style.customButton}>{'Save'}</button>
    </div>
}
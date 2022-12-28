import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import inputStyle from '../../style/CommonStyles.module.css'
import {FileAddOutlined} from "@ant-design/icons";

type AddItemPropsType = {
    addItem: (title: string) => void
}

export const AddItem = React.memo(function (props: AddItemPropsType) {

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== '') {
            props.addItem(title);
            setTitle('');
        } else {
            setError('Поле обязательно к заполнению');
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        <input
            className={inputStyle.customInput}
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}

        />
        <FileAddOutlined onClick={addItem}/>
        {error ? <div>{error}</div> : null}
    </div>
})
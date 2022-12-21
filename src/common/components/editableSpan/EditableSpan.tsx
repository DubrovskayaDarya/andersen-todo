import React, {ChangeEvent, useState} from 'react';
import editIcon from '../../assets/edit-icon.svg'
import iconStyle from '../../style/CommonStyles.module.css'

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <>
            <input value={title} onChange={changeTitle} autoFocus/>
            <button onClick={activateViewMode}>
                {'save'}
            </button>
        </>
        : <>
            <span>{props.value}</span>
                <img onClick={activateEditMode} className={iconStyle.icon} alt={'edit-icon'} src={editIcon}/>
        </>
});
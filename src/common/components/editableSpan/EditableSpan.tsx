import React, { ChangeEvent, useState } from "react";
import { EditOutlined, SaveOutlined } from "@ant-design/icons";

type EditableSpanPropsType = {
  value: string;
  onChange: (newValue: string) => void;
};

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
  let [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState(props.value);

  const activateEditMode = () => {
    setEditMode(true);
    setTitle(props.value);
  };
  const activateViewMode = () => {
    setEditMode(false);
    props.onChange(title);
  };
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return editMode ? (
    <>
      <input value={title} onChange={changeTitle} autoFocus />
      <SaveOutlined onClick={activateViewMode} />
    </>
  ) : (
    <div>
      <span>{props.value}</span>
      <EditOutlined onClick={activateEditMode} />
    </div>
  );
});

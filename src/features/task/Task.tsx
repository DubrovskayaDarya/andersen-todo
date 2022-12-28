import React, { ChangeEvent, useCallback } from "react";
import { TaskType } from "../../app/App";
import { EditableSpan } from "../../common/components/editableSpan/EditableSpan";
import style from "./Task.module.css";
import { DeleteOutlined } from "@ant-design/icons";

type TaskPropsType = {
  task: TaskType;
  changeTaskStatus: (taskId: string, status: boolean) => void;
  changeTaskTitle: (taskId: string, newTitle: string) => void;
  deleteTask: (taskId: string) => void;
};

export const Task = (props: TaskPropsType) => {
  const onCheckboxChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      props.changeTaskStatus(props.task.id, e.currentTarget.checked);
    },
    [props.task.id]
  );

  const onTitleChangeHandler = useCallback(
    (newValue: string) => {
      props.changeTaskTitle(props.task.id, newValue);
    },
    [props.task.id]
  );

  const onClickHandler = useCallback(
    () => props.deleteTask(props.task.id),
    [props.task.id]
  );

  return (
    <div className={style.taskContainer}>
      <input
        type={"checkbox"}
        checked={props.task.isDone}
        onChange={onCheckboxChangeHandler}
      />
      <EditableSpan value={props.task.title} onChange={onTitleChangeHandler} />
      <DeleteOutlined onClick={onClickHandler} />
    </div>
  );
};

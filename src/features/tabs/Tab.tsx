import style from "./Tab.module.css";
import { FilterValuesType } from "../../app/App";

type TabPropsType = {
  filter: FilterValuesType;
  onActive: () => void;
  onCompleted: () => void;
};

export const Tab = (props: TabPropsType) => {
  let classnameForActive =
    props.filter === "active" ? style.activeMode : style.defaultMode;
  let classnameForCompleted =
    props.filter === "completed" ? style.activeMode : style.defaultMode;

  return (
    <div className={style.tabContainer}>
      <button className={classnameForActive} onClick={props.onActive}>
        {"active"}
      </button>
      <button className={classnameForCompleted} onClick={props.onCompleted}>
        {"completed"}
      </button>
    </div>
  );
};

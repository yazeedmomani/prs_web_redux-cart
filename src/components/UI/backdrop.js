import css from "./backdrop.module.css";

function Backdrop(props) {
  return (
    <div
      className={css.backdrop}
      onClick={props.onClick}></div>
  );
}

export default Backdrop;

import classes from "./button.module.css";

export default function Button(props) {
  const { text, style, onClick } = props;
  return (
    <button className={classes.btn} style={style} onClick={onClick}>
      {text}
    </button>
  );
}

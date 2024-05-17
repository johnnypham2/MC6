import styles from "./Button.module.css";

interface buttonProps {
  children: string;
  onClickFunction: () => void;
  color: string;
}

const Button = ({children,onClickFunction,color}: buttonProps) => {
  return (
    <>
      <button
      className={`${styles.btn} ${styles[`btn-${color}`]}`}
      onClick={onClickFunction}
    >
      {children}
    </button>
    </>
  );
};

export default Button;

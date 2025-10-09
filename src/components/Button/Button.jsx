import styles from "./Button.module.css";

function Button(props) {
    const { type, disabled, onClick, children } = props;

    return (
        <button
            className={styles.button}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {/* CSSモジュールのButton.module.cssで設定したクラス（.button）を読み込む。ReactではclassではなくclassName。{importした変数(styles).クラス名(button)} */}
            {children}
        </button>
    );
}

export default Button;

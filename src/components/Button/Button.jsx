import styles from './Button.module.css';

function Button(props) {
    const { type, disabled ,children } = props;

    return (
        <button className={styles.button} type={type} disabled={disabled} >
            {/* CSSモジュールのButton.module.cssで設定したクラス（.button）を読み込む。ReactではclassではなくclassName。{importした変数(styles).クラス名(button)} */}
            {children} {/*コンポーネントの中身に書いた要素やテキストを受け取るためのもの*/}
        </button>
    );
}

export default Button;

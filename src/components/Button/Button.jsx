import styles from './Button.module.css';
import { useState } from 'react';

function Button(props) {
    const [count, setCount] = useState(0); //countが状態を持つ変数。 setCountがcountを更新するための関数。
    const { type, disabled } = props;

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <button className={styles.button} type={type} disabled={disabled} onClick={handleClick}>
            {/* CSSモジュールのButton.module.cssで設定したクラス（.button）を読み込む。ReactではclassではなくclassName。{importした変数(styles).クラス名(button)} */}
            カウント：{count}
        </button>
    );
}

export default Button;

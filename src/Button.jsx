function Button(props) {
    const { type, disabled ,children ,onClick} = props;

    return (
        <button type={type} disabled={disabled} onClick={onClick}>
            {children} {/*コンポーネントの中身に書いた要素やテキストを受け取るためのもの*/}
        </button>
    );
}

export default Button;

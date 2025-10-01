import "./App.css";
import Button from "./Button"

function App() {

    const handleClick = () => {
        alert("クリックされました");
    }

    return (
        <>
            <h1>Hello World</h1>
            <Button type='submit' disabled={false} onClick={handleClick}>
                ボタンクリック
            </Button>
        </>
    );
}

export default App;

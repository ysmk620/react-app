import "./App.css";
import Button from "./components/Button/Button"

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

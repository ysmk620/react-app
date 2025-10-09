import { useState ,useEffect} from "react";
import "./App.css";
import Button from "./components/Button/Button"
import Display from "./components/Display/Display";


function App() {
    const [count, setCount] = useState(0); //countが状態を持つ変数。 setCountがcountを更新するための関数。

    const handleClick = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("count;", count);
        if(count>15){
            setCount(0);
        }
    },[count]);

    return (
        <>
            <h1>Hello World</h1>
            <Button type='submit' disabled={false} onClick={handleClick}>
                ボタン
            </Button>
            <Display count={count}/>
        </>
    );
}

export default App;

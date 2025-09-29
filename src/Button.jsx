function Button () {
    const handleclick = () => {
        alert("クリックされました");
    }

    return <button type="button" onClick={handleclick}>クリック</button>
}

export default Button;
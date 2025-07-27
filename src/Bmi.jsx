import { useRef, useState } from "react";
//import './Bmi.css';
function BmiText({ bmi }) {
    if (bmi < 18.5) {
        return (
            <>
                <img src="6121-คลั่งผอม-ถึงตาย.jpg" height={200} alt="Thin" />
                <h1>Underweight</h1>
            </>
        );
    }
    if (bmi > 30) {
        return (
            <>
                <img src="อ้วน.jpg" height={200} alt="Overweight" />
                <h1>Overweight</h1>
            </>
        );
    }
    return <h1>Normal</h1>;
}

export default function Bmi() {
    const w_inputRef = useRef(null);
    const h_inputRef = useRef(null);
    const [bmi, setBmi] = useState(0.0);

    function calBmi() {
        let w = parseFloat(w_inputRef.current.value);
        let h = parseFloat(h_inputRef.current.value) / 100;
        setBmi(w / (h * h));
    }

    return (
        <>
            <h1>Bmi Calculator</h1>
            Weight:<input ref={w_inputRef} /> kg.<br />
            Height:<input ref={h_inputRef} /> cm.<br />
            <button onClick={calBmi}>Calculator</button>
            <p> Bmi value: {bmi.toFixed(2)}</p>
            <BmiText bmi={bmi} />
        </>
    );
}
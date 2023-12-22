import { Input } from "@chakra-ui/react";
import { useState } from "react";


function Value() {
    // состояния
    const [number1, setNumber1] = useState<number>(0);
    const [number2, setNumber2] = useState<number>(0);

    const [result, setResult] = useState<number>(0);


    //методы-обработчики
    const handleInputChange1 = (e) => {
        const value = parseInt(e.target.value, 10);
        // меняем состояния
        setNumber1(isNaN(value) ? 0 : value);

        //not work 
        //setResult(number1 + number2);
        setResult(value + number2);
    }
    const handleInputChange2 = (e) => {
        const value = parseInt(e.target.value, 10);
        setNumber2(isNaN(value) ? 0 : value);

        //not work 
        //setResult(number1 + number2);
        setResult(number1 + value);
    }


    return (
        <>
            <div>
                <Input type='number' variant='flushed' placeholder='Enter value one: ' onChange={handleInputChange1} />
                <Input type='number' variant='flushed' placeholder='Enter value one: ' onChange={handleInputChange2} />

                <p>Результат:  {number1 + number2}</p>
                {/* либо так вывести*/}
                <p>Результат:  {result}</p>
            </div>
        </>
    )
}





export default Value
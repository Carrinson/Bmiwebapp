import { useState } from "react";
import SideBar from "../components/SideBar";

function  Bmi(){
    const [userName, setUsername] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState("");


    let calcbmi = (e) => {
        e.preventDefault();

        if (weight === 0 || height === 0) {
            alert("Please enter a valid height/weight");
        }
        else{
            let bmi = weight / (height * height);
            setBmi(bmi.toFixed(1));

            if ( bmi < 18.5){
                setStatus("You are underweight.");
            }
            else if(bmi >=18.5 && bmi <= 29.9){
                setStatus("You are Normal weight")
            }
             else{
                setStatus("You are Obese")
            }
        }
        const h= height/100;
    const bmivalue = (w/(h*h));
    setBmi(bmivalue);
    
    if (bmivalue <18.5) {
        setStatus("Underweight")
    }else if (bmivalue < 25) {
        setStatus("Normal Weight")
    }else if (bmivalue< 30) {
        setStatus("Overweight")
    }else{
        setStatus("Obese")
    }
    }

    return ( 
        <>
            <SideBar/>
            <div className="Bmi-con">
            <div className="Bmi">
                <h1> BMI </h1>
                
                <p>Username</p>
                <input  type="text" 
                value={userName} 
                onChange={(e) =>setUsername(e.target.value)} />

                <p>Weight(kg)</p>
                <input  type="number" value={weight} onChange={(e) =>setWeight(e.target.value)} />

                <p>Height(m)</p>
                <input  type="number" value={height} onChange={(e) =>setHeight(e.target.value)}/>

                {/* <p>Gender</p>
                <input  type="text" value={userName} onChange={(e) =>setUsername(e.target.value)}/>
                 */}
                <button onClick={calcbmi} className="calc-btn">
                    Calculate
                </button>

                <p>Ans</p>
                <p > {bmi} </p>
                <p>Status</p>
                <p>{status}</p>
            </div>

            </div>
        </>
     );
}



export default Bmi
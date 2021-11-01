import React, { useState } from 'react';

const CheckBoxs = () => {
   const[rs,setRs] =useState("false");
   const[rs1,setRs1] = useState("false");
   const[rs2,setRs2] = useState("false");
   const handleOnClicl0 =() =>{
    if(document.getElementById("cb0").checked == true){
       document.getElementById("cb1").checked = true;
       setRs("true");
       document.getElementById("cb2").checked = true;
       setRs1("true");
       document.getElementById("cb3").checked = true;
       setRs2("true");
    }
   }
    const handleOnClick =() =>{
        document.getElementById("cb1").checked == false ?
     setRs("false"):setRs("true");
    }
    const handleOnClick1=() =>{
        document.getElementById("cb2").checked == false ?
     setRs1("false"):setRs1("true");
    }
    const handleOnClick2 =() =>{
        document.getElementById("cb3").checked == false ?
     setRs2("false"):setRs2("true");
    }
    return (
        <div>
            <div>Choose your interest</div>
            <div><input id="cb0" type="checkbox" onClick={handleOnClicl0}/>All</div>
            <div><input id="cb1" type="checkbox" onClick={handleOnClick} />Coding</div>
            <div><input id="cb2" type="checkbox" onClick={handleOnClick1} />Music</div>
            <div><input id="cb3" type="checkbox" onClick ={handleOnClick2}/>Reading Books</div>
            <div>You selected:</div>
            <div>Coding : {rs} Music :{rs1} Books :{rs2}</div>
        </div>
    );
};

export default CheckBoxs;
import { useEffect, useState } from "react";

function useCurrency(currency){
    const [data,setData]=  useState({})   //deafult initialized to empty object
    useEffect(()=>{          //currency k andar change ho to call krna hai useEffect ko
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((response)=>response.json()).then((resp)=>setData(resp[currency]))           //idhar jo bhi data aayega usko ek hook me dalenge so that wo ui me reflect kare  
    },[currency])
    return data;
}

export default useCurrency;




 //this gives the list of currencies which equals 1 unit of our currency specified
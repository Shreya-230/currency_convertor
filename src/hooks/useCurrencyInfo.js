// Going to built custom hooks
// and custom hooks can also use built-in hooks
import {useEffect,useState} from "react"

function useCurrencyInfo(currency){
const[data,setData]=useState({})

    useEffect(()=>{
        // fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/{endpoint}`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        // ${currency} we wrote!!
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);
    },[currency]) 

    // return [data,setData]
    console.log(data);
    return data;
} 

export default useCurrencyInfo
// !!Designed Custom Hook!
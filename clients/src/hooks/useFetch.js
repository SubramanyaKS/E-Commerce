import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch=(url,setData) =>{
    // const [data, setData] = useState(null);
    useEffect(()=>{
          axios.get(url)
        .then((res)=>{
            console.log("Result data ",typeof res.data);
            setData(res.data);
            // console.log("Data inside context", typeof data)
            
        }).catch((e)=>{
            console.log("Error",e)
        })
      },[url])

    // return {data}
}
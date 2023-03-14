import axios from "axios";
import { useState } from "react";

export const useFetch=(url) =>{
    const [data, setData] = useState(null);
    const get=()=>{
        axios.get(url).then((res)=>{
            setData(res.data);
        }).catch((error) => {
            console.log(error);
          });
    }
    get();
    return ({data, setData});
}
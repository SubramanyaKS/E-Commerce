import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import Item from "./Item";


const Index = ()=>{
    const [product,setProduct] =useState([]);

    // useEffect(()=>{
    //     axios.get("http://localhost:4000/products")
    //     .then((res)=>{
    //         console.log(res.data);
    //         setProduct(res.data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // },[]);
    useEffect(() => {
        const news = async () => {
          axios
            .get("http://localhost:4000/products/")
            .then((response) => {
              setProduct(response.data);
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        };
        console.log("News",news());
      }, []);

    return(
        <>
        <h1 style={{textAlign:"center"}}>Welcome to Namma Nadu Kart</h1>
        <div style={{ display: "flex", flexWrap: "wrap"}}>
        {product.map((article) => {
          return (
            <Item
              name={article.name}
              price={article.price}
              category={article.category}
              color={article.color}
              description={article.description}
              image={article.image}
              id={article.id}
            />
          );
        })}
       </div>
        
        </>
    );

}
export default  Index;
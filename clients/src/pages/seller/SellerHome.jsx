import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { fetchProduct } from "../../util/helper";
import axios from "axios";
//import Item from "../../components/Item";
import Display from "./Display";

const SellerHome=()=>{
    const[prod,setProd] = useState([]);
    const navigate= new useNavigate();
    useEffect(()=>{
       
        let p = sessionStorage.getItem("sAuthenticated");
        if(!p){
        navigate("/seller-login");
    }
    else{
      axios.get("http://localhost:4000/products")
      .then((response) => {
        console.log(response.data);
        setProd(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    
    });
    
    return(<>
    <p>Hi Seller</p>   
        <div style={{ display: "flex", flexWrap: "wrap"}}>
        {prod.map((article) => {
          return (
            <Display
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
    </>);
}
export default SellerHome;
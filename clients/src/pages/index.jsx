import { useEffect } from "react";
// import { useState } from "react";
import axios from "axios";
import '../assets/css/index.css';
import { ProductState } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import PCards from "../components/PCards";
import TopCarousal from "../components/TopCarousal";

const Index = ()=>{
  // const [state,setState] = useState([]);
  const {product, setProduct} = ProductState();
  const navigate = useNavigate();
  useEffect(()=>{
    // const data =fetchProduct();
    //http://localhost:4000/products
      axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
        console.log("Result data ",typeof res.data);
        // setState(res.data);
        setProduct(res.data);
        console.log("Dta inside context", typeof product)
        //console.log("Data",product);
    })
    //console.log(fetchProduct());
  },[])
  return(
    <section>
      <div style={{marginTop:"10px"}}>
        {/* carousal */}
        <TopCarousal/>
      </div>
      <h3 className="text-center">Products:</h3>
      <div style={{ display: "flex", flexWrap: "wrap",marginTop:"30px"}}>
        
      {product.map((item)=>(
         <div className="mb-3" key={item.id}>
        <PCards  article={item}/>
        </div>
      ))}
      </div>
      
    </section>

  );
    

}
export default  Index;
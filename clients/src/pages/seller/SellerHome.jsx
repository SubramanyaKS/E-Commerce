import { useEffect } from "react";
import { useNavigate } from "react-router";
const SellerHome=()=>{
    const navigate= new useNavigate();
    useEffect(()=>{
        let p = sessionStorage.getItem("sAuthenticated");
    if(!p){
        navigate("/seller-login")
    }

    });
    
    return(<>
    <p>Hi</p>
    </>);
}
export default SellerHome;
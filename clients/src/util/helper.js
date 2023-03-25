import axios from "axios";
export const LogoutS=()=>{
    sessionStorage.removeItem('sid');
    sessionStorage.removeItem('sAuthenticated');
    window.location.href = "/home";
};
export const LogoutU=()=>{
    sessionStorage.removeItem('uid');
    sessionStorage.removeItem('uAuthenticated');
    window.location.href = "/home";
};
export const fetchProduct=()=>{
    axios.get("http://localhost:4000/products")
    .then((res)=>{
        console.log("Result data inside fetchProduct",res.data);
    });    
}
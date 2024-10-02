import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { ThemeStore } from "./ThemeContext";
import { addCart } from "../Store/CartSlice";
import { useDispatch } from "react-redux";

const Card = ({ productObj }) => {

let dispatch = useDispatch();
  
let { title, category, price, thumbnail, rating,id } = productObj;

let { theme } = useContext(ThemeStore);
    
let navigate = useNavigate();
    
let handleNavigation = () => {
    navigate(`/product/${obj.id}`);
}

let handleAddCart = (event) => {
    event.stopPropagation();
    dispatch(addCart(productObj))
    //console.log("Adding to cart")
}

let darkTheme = "card bg-slate-500 w-96 shadow-xl m-2 ";
let lightTheme = "card bg-gray-300 w-96 shadow-xl m-2 text-black"

return (

<div className={theme =="light" ? lightTheme : darkTheme} onClick={handleNavigation}>
<figure className="outline outline-none w-fit h-fit px-11 py-8 bg-emerald-400">
<img
    className={theme == " light" ? "bg-white rounded-xl mt-1" : "bg-slate-700 rounded-xl mt-1"}
    src={thumbnail}
    alt="Shoes"
/>
</figure>
<div className="card-body bg-rose-300">
    <h2 className="card-title hover:bg-emerald-500 w-fit">{title}</h2>
    <p className="outline outline-none w-fit hover:bg-blue-500"> Category {category} </p>
    <p className="outline outline-none w-fit hover:bg-blue-500"> Price {price} </p>
    <p className="outline outline-none w-fit hover:bg-blue-500"> Rating {rating} </p>
    <div className="card-actions justify-end">
    <button className="btn btn-accent" onClick={handleAddCart}>Add to Cart</button>
    </div>
</div>
</div>
);
};

export default React.memo(Card);

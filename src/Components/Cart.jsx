import React from "react";
import CartRow from "./CartRow";
import { useSelector , useDispatch } from "react-redux";
import { clearCart , AscendingRating , DescendingRating } from "../Store/CartSlice";

const Cart = () => {

  let carData = useSelector((store)=> store.cart.cart )
  let dispatch = useDispatch();
  return (
    <div className="overflow-x-auto ml-10">
      <table className="table">
      
        <thead>
          <tr className="text-2xl">
            <th> Image </th>
            <th> <span onClick={()=> { dispatch(AscendingRating())}}>🔼</span> Rating <span onClick={()=> { dispatch(DescendingRating())}}> 🔽 </span></th>
            <th>Price </th>
            <th>Quantity </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
         {
          carData.map((cartObj)=> <CartRow obj={cartObj}></CartRow>)
         }
         
        </tbody>
      </table>
      <button className="btn btn-block btn-outline btn-error 
      bg-slate-300 text-2xl" onClick={() => dispatch(clearCart())}> Clear Cart </button>
    </div>
  );
};

export default Cart;
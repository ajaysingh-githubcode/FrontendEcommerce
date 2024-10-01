import React, { useEffect, useState , useContext } from "react";
import Card from "./Card.jsx";
import ShimmerUI from "./ShimmerUI.jsx";
import { ThemeStore } from "./ThemeContext.jsx";
import AddedCartCard from "./AddedCartCard.jsx";
import { useSelector } from "react-redux";

const Home = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [products, setProducts] = useState(null);
  const [query, setQuery] = useState("");

  const {theme , setTheme} = useContext(ThemeStore);

  let cartItems = useSelector((store)=> store.cart.cart )
  //let userData = useSelector((store)=> store.user )
  let handleTopRated = () => {
    let filteredData = allProducts.filter((obj) => {
      return obj.rating > 4;
    });
    setProducts(filteredData);
  };

  
  let handleCategory = (category) => {
    let filteredData = allProducts.filter((obj) => {
      return obj.category == category;
    });
    setProducts(filteredData);
  };

  let handleSearch = () => {
    let filteredData = allProducts.filter((obj) => {
      return obj.title.toLowerCase().includes(query.toLowerCase().trim());
    });
    setProducts(filteredData);
    setQuery("");
  };

  let getdata = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let productData = await data.json();
    setAllProducts(productData.products);
    setProducts(productData.products);
  };
  useEffect(() => {
    getdata();
  }, []);

  let AddedCart = AddedCartCard(Card)

  let inCart = (id)=>{
     let idx = cartItems.findIndex((cartObj)=> cartObj.data.id == id );

     if( idx == -1 ) return false ;
     return true ;
  }

  return (
    <div className= { theme == "light" ? "bg-slate-400" : "bg-dark"}>
      <div className="flex justify-around items-center  w-full h-16">
        <button onClick={handleTopRated} className="btn btn-active btn-accent text-base">
          {" "}
          Top rated{" "}
        </button>
        <button
          className="btn btn-active btn-accent text-base"
          onClick={() => {
            handleCategory("furniture");
          }}
        >
          {" "}
          Furniture{" "}
        </button>
        <div className="search flex justify-around items-center md:w-1/3 my-2 md:my-0">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-[#75e1bd] rounded-lg"
          />
          <button
            className="btn btn-outline btn-active btn-accent m-2 text-base"
            onClick={handleSearch}
          >
            {" "}
            Search
          </button>
        </div>
        <button
          className="btn btn-active btn-accent text-base"
          onClick={() => {
            handleCategory("groceries");
          }}
        >
          Grocery{" "}
        </button>
        <button
          className="btn btn-active btn-accent text-base"
          onClick={() => {
            handleCategory("beauty");
          }}
        >
          {" "}
          Beauty{" "}
        </button>
      </div>
      <div className=" flex justify-around flex-wrap  ">
        {products == null ? (
          <ShimmerUI></ShimmerUI>
        ) : (
          products.map((obj) => {
            return inCart(obj.id) == true ?
              (<AddedCart key={obj.id} productObj={obj}></AddedCart>) :
              (<Card key={obj.id} productObj={obj}></Card>)
          })
        )}
      </div>
    </div>
  );
};

export default Home;

//return <Card Key={obj.id} productObj={obj}></Card>
//return <Link key={obj.id} to={`/product/${obj.id}`}><Card productObj={obj}></Card></Link>
//return <Card key={obj.id} productObj={obj}></Card>
//return <AddedCart key={obj.id} productObj={obj}></AddedCart>
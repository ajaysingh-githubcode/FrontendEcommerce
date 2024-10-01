import React from 'react'

const AddedCartCard = (Component) => {
  return (props) => {
    return (
<div className="relative">
<div className="bg-orange-500 absolute z-30 rounded-box text-black p-3 
font-bold left-8 top-2"> Added to cart </div>
<Component {...props} ></Component>
</div>
    );
  }
}

export default AddedCartCard;
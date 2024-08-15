import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
// import { mens_kurta } from '../../../Data/mens_kurta'

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div>
        <img
          src={product.imageUrl}
          alt=""
          className="h-full w-full object-cover object-left-top"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-400 font-semibold">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

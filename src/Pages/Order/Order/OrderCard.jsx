import React from "react";

const OrderCard = ({item}) => {
    const {image,price,name,recipe}=item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
        <p className="absolute right-0 bg-slate-900 text-xl p-2 text-white mr-4 mt-4 rounded-lg">${price}</p>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

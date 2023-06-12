import React from "react";
import { useContext } from "react";
import { authContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";

const OrderCard = ({item}) => {
    const {image,price,name,recipe,_id}=item;
    const {user}= useContext(authContext);

    const [,refetch]=useCart();

    const handleAddToCart = item =>{
      console.log(item);
      if(user && user.email ){
        const cartItem ={itemId: _id,image,price,name,recipe,email:user.email}
        fetch('http://localhost:5000/cart',{
          method: "POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(cartItem)
        })
        .then(res=> res.json())
        .then(data =>{
          if(data.insertedId){
            refetch();
            Swal.fire(
              'Good job!',
              'You added to cart',
              'success'
            )
          }
        })
      }
      else{
        Swal.fire(
          'Please Login!',
        )
      }
    }
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
          <button onClick={()=>handleAddToCart(item)} className="btn btn-primary">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

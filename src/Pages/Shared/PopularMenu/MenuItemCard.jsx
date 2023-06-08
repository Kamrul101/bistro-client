import React from 'react';

const MenuItemCard = ({item}) => {
    const {image,price,name,recipe}=item;
    return (
        <div className='flex space-x-4 items-center'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />
            <div>
                <h3 className='font-semibold text-pink-700'>{name}---------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItemCard;
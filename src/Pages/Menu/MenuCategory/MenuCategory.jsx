import React from 'react';
import MenuItemCard from '../../Shared/PopularMenu/MenuItemCard';
import Cover from '../Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div className='py-8'>
            {
                title && <Cover
                Img={coverImg}
                title={title}
                ></Cover>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-16'>
                {
                    items.map(item => <MenuItemCard
                    key={item._id}
                    item={item}
                    ></MenuItemCard>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className='btn btn-outline border-0 border-b-4'>Order now</button>
            </Link>
            
        </div>
    );
};

export default MenuCategory;
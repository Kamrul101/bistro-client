import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItemCard from './MenuItemCard';

const PopularMenu = () => {
    const [menu, setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)
        }
            )
    },[])
    return (
        <section className='mb-8'>
            <SectionTitle
            heading={'From our Menu'}
            subheading={'Popular Items'}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                {
                    menu.map(item => <MenuItemCard
                    key={item._id}
                    item={item}
                    ></MenuItemCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
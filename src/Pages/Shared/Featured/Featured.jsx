import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item  bg-fixed text-white pt-10'>
            <SectionTitle
            subheading={'Check it out'}
            heading={'Featured Items'}
            ></SectionTitle>
            <div className='md:flex justify-center items-center py-20 px-36 bg-slate-500 bg-opacity-40'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 20,2023</p>
                    <p>Where can I get some</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ut alias voluptas esse excepturi ducimus deleniti a dolores veniam ipsa!</p>
                    <button className='btn btn-outline border-0 border-b-4'>Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
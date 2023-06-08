import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Shared/Category/Category';
import PopularMenu from '../Shared/PopularMenu/PopularMenu';
import Featured from '../Shared/Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;
import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
      Img={menuImg}
      title={'Our menu'}
      ></Cover>
      {/* main cover */}
      {/* offered */}
      <SectionTitle subheading={"Don't Miss"} heading={"Today's offer"}></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
        {/* dessert */}
        <MenuCategory items={desserts}
        title={"Dessert"}
        coverImg={dessertImg}
        ></MenuCategory>
        <MenuCategory items={pizza}
        title={"Pizza"}
        coverImg={pizzaImg}
        ></MenuCategory>
        <MenuCategory items={salad}
        title={"Salad"}
        coverImg={saladImg}
        ></MenuCategory>
        <MenuCategory items={soup}
        title={"Soup"}
        coverImg={soupImg}
        ></MenuCategory>

      
      
    </div>
  );
};

export default Menu;

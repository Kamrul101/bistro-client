import React, { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Menu/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import OrderCard from "./OrderCard";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    const drinks = menu.filter(item => item.category === 'drinks');
  return (
    <div>
      <Cover Img={orderCover} title={"Order food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => console.log(index)}>
  <div className="text-3xl text-red-500 flex justify-center mt-8 ">
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Dessert</Tab>
    <Tab>Soup</Tab>
    <Tab>Drinks</Tab>
    <Tab>Offered</Tab>
  </TabList>
  </div>
  <TabPanel>
    <OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={desserts}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={offered}></OrderTab>
  </TabPanel>
</Tabs>
    </div>
  );
};

export default Order;

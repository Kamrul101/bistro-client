import React from 'react';
import OrderCard from '../Order/OrderCard';

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-3 gap-5">
    {
        items.map(item => <OrderCard
        key={item._id}
        item={item}
        ></OrderCard>)
    }
    </div>
    );
};

export default OrderTab;
import { Table } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Order = () => {
    // const { _id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    console.log(orders);

    useEffect(() => {
        fetch('https://guarded-chamber-62045.herokuapp.com/orderDetails?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [])
    return (
        <div classNameName="mt-5">
          
         <h3>You have: {orders.length} ordering</h3>
         {
             orders.map(order =>
                  <ul>
                 <li>book name:{order.book?.name}</li>
                 <li> price:{order.book?.price}</li>
                
             </ul>
           
                )
         }
        </div>

      
    

    );
};

export default Order;
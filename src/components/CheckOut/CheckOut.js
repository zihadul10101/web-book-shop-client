import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Order from '../Order/Order';

const CheckOut = () => {
  const { _id } = useParams();
  // console.log(_id);
 
  const [checkOut, setCheckOut] = useState([]);
  useEffect(() => {
    fetch('https://guarded-chamber-62045.herokuapp.com/books')
      .then(res => res.json())
      .then(data => setCheckOut(data))
  }, [])
  const books = checkOut.find(pd => pd?._id === _id)



  console.log(books);
 

  return (
    <div className="pt-5 mt-5">
      {
        checkOut.length === 0 && <div style={{ textAlign: 'center' }} class="spinner-border" role="status">
          <span class="visually-hidden"></span>
        </div>
      }
      <form className="bg-danger">
        <h1><span> CheckOut</span></h1>
        <h1> name: {books?.name}</h1>
        <h2>price: {books?.price}</h2>
        <h2>total: {books?.price}</h2>
        <h3><button >Order</button></h3>
        <Order></Order>

      </form>
    </div>
  );
};

export default CheckOut;
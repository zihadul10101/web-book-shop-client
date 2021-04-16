import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Order from '../Order/Order';

const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { _id } = useParams();
  // console.log(_id);

  const [checkOut, setCheckOut] = useState([]);
  useEffect(() => {
    fetch('https://guarded-chamber-62045.herokuapp.com/books')
      .then(res => res.json())
      .then(data => setCheckOut(data))
  }, [])
  const books = checkOut.find(pd => pd?._id === _id)
  //console.log(books);

  


  const handleOrdering = () => {
    // console.log('clicked');
    const {displayName,email} =loggedInUser;
    const newUser={displayName,email};
    const newOrdering = { ...newUser, book:books };
    fetch('http://localhost:6060/addOrdering', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrdering)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }



  return (
    <div className="pt-5 mt-5">
      {/* spinner */}
      {
        checkOut.length === 0 && <div style={{ textAlign: 'center' }} class="spinner-border" role="status">
          <span class="visually-hidden"></span>
        </div>
      }

      <h3>user name:{loggedInUser.name}</h3>
      <h3>email:{loggedInUser.email}</h3>
    
        <h1><span> CheckOut</span></h1>
        <h1> name: {books?.name}</h1>
        <h2>price: {books?.price}</h2>
        <h2>total: {books?.price}</h2>
        <Link className="btn btn-primary" to="/order" onClick={handleOrdering} >Order</Link>


     
    </div>
  );
};

export default CheckOut;
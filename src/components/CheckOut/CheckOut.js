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
    const { displayName, email } = loggedInUser;
    const newUser = { displayName, email };
    const newOrdering = { ...newUser, book: books };
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
    <div className="row pt-5 mt-5">
      {/* spinner */}
      {
        checkOut.length === 0 && <div style={{ textAlign: 'center' }} class="spinner-border" role="status">
          <span class="visually-hidden"></span>
        </div>
      }
      <section className="pb-3 ">

        {/* <!--Section heading--> */}
        <h1 className="h1 pt-4 text-center ">Our pricing plans</h1>
        {/* <!--Section description--> */}
        <p className=" mb-5 mt-5 px-3" style={{color:'gold'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a
          pariatur accusamus veniam.</p>
          <div className="col-md-12 mb-4">
            <div className="card bg-danger card-image text-center">
              <div className="text-red text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3">
                <div className="card-body ">
                  <h3>user name:{loggedInUser.name}</h3>
                  <h4>email:{loggedInUser.email}</h4>
                      <h1> name: {books?.name}</h1>    
                      <h2>price: {books?.price}</h2>
                      <h2>total: {books?.price}</h2>
                   
                  <Link className="btn btn-primary" to="/order" onClick={handleOrdering} >Order</Link>
                </div>

              </div>
           
            </div>
          </div>
      </section>

    </div>
  );
};

export default CheckOut;
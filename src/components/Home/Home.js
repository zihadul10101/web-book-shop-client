import React, { useEffect, useState } from 'react';
import StoreBook from '../StoreBook/StoreBook';

const Home = () => {
    const [bookDetails,setBookDetails]=useState([]);
    useEffect(()=>{
        fetch('https://guarded-chamber-62045.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>setBookDetails(data))
    },[])
    return (
        <div className="row pt-5 mt-5">
            {
                bookDetails.length === 0 && <div style={{textAlign:'center'}} class="spinner-border" role="status">
                <span class="visually-hidden"></span>
              </div>
            }
           {
               bookDetails.map(bookDetail => <StoreBook key={bookDetail.key} bookDetail={bookDetail}></StoreBook>)
           }
        </div>
    );
};

export default Home;
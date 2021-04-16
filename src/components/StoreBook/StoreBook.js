import React from 'react';
import { Link } from 'react-router-dom';

const StoreBook = (props) => {
    const { imageUrl, price, _id, name } = props.bookDetail;
    return (
        <div className=" pt-5 mt-100">
            <div  class="card" style={{width: '18rem'}}>
                <img style={{ height: '220px' }} src={imageUrl} alt="" />
                <div class="card-body">
                    <div className="row d-flex pt-5">
                        <div className="col-md-6">
                            <h4>{name}</h4>
                            <h5>price: {price}</h5>
                        </div>
                        <div className="col-md-6">
                            <Link className="btn btn-danger" to={`/bookDetail/${_id}`} >BUY NOW</Link>

                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="col-md-3 ">
                <img style={{height:'220px'}} src={imageUrl} alt=""/>
                </div>
              <div className="row d-flex pt-5">
              <div className="col-md-6">
               <h4>{name}</h4>
                <h5>price: {price}</h5>
               </div>
               <div className="col-md-6">
               <Link className="btn btn-danger" to={`/bookDetail/${_id}`} >BUY NOW</Link>
              
            </div> */}
        </div>
        // </div>
    );
};

export default StoreBook;
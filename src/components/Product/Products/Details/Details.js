import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Details = () => {
    const {id} = useParams();
    const [details , setDetails] =useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
}, [])
    return (
        <>
           
            <div className="service-container py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12 ">
                               <div className="service-details">
                               <img className="img-fluid" src={details.url} alt="" />
                               <h2>{details.name}</h2>
                               <p>{details.descrition}</p>
                               </div>
                    </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                       
                           
                        </div>
                    </div>
                </div>
            </div>
     
           
           
        </>
    );
};

export default Details;
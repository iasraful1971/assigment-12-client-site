import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SingleProduct from './SingleProduct/SingleProduct';


const Product = () => {
    const [products , setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    if(products.length === 0) {
        return <CircularProgress />
      }
      
    return (
       <>
    <Header></Header>
       <Container>
            <h2 style={{padding:'20px 0'}}>Our Collections</h2>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
                {
                    products.map( product => <SingleProduct
                      key= {product._id}
                       product ={product}
                    ></SingleProduct>)
                }
      </Grid>
     
    </Box>
       </Container>
       <Footer></Footer>
       </>
       
    );
};

export default Product;
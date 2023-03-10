import React, { useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {

    const {products, setProducts} = props;
    
    return (
        <div>
            <ProductForm products={products} setProducts={setProducts}/>
            <ProductList products={products} setProducts={setProducts}/>
        </div>
    )
}

export default Main
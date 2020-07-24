import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';


function App() {

  // Products list

  const [ products, saveProducts ] = useState([

    { id: 1, name: 'Mermelada', price: 2000 },
    { id: 2, name: 'Manjar', price: 5000 },
    { id: 3, name: 'Crema de maní', price: 3500 },
    { id: 4, name: 'Encurtido', price: 1000 }

  ]);

  // get date
  const date_now = new Date().getFullYear(); 

  return (
    <Fragment>

      <Header 
        title = 'Productos Le Troupe'
      />

      <h1>Escoge tus productos</h1>
      { products.map(product =>(
        <Product 
        key = {product.id}
          product = {product}
        />
      ))}

      <Footer 
        date_now = {date_now}
      />

    </Fragment>
  );
}

export default App;

import React from 'react';

const Product = ( {product, cart, sumProduct, products} ) => {

    const { name, price, id } = product

    // Add product
    const addProduct = id => {
        const product = products.filter(product => product.id === id)[0];
        sumProduct([
            ...cart,
            product
        ]);
    }

    // Delete product

    const deleteProduct = id => {
        const products = cart.filter(product => product.id !== id); 
    
    // Put products in state

        sumProduct(products)
    }



    return ( 
        <div>
            <h2>{name}</h2>
            <p>${price}</p>

            { products
            ?
                (
                    <button 
                        type="button"
                        onClick={ () => addProduct(id) }
                    >Añadir al carro</button>
                )          
            : 
                (
                    <button 
                        type="button"
                        onClick={ () => deleteProduct(id) }
                    >Eliminar</button>
                )           
            }
        </div>    
    );
}
 
export default Product;


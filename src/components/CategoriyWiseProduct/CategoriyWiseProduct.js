import React, { useEffect } from 'react'
import './CategoryWiseProduct.css'
import { useParams } from 'react-router-dom'

import { Circles } from 'react-loader-spinner'




export const CategoriyWiseProduct = () => {
    const [products, setProducts] = React.useState([])
    const { searchValue } = useParams();
    useEffect(() => {
        if (searchValue) {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => setProducts(data.filter(item => Object.values(item).join("").toLowerCase().includes(searchValue.toLowerCase()))))
        } else {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => setProducts(data))
        }

    }, [searchValue]);

    return (
        <div className="container">

            {
                products?.length < 1 && <div className="loader">
                    <Circles
                        height="40"
                        width="40"
                        color="#4fa94d"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            }

            <div className="row">
                {
                    products?.map((product, index) => <div key={index} className="col-4 mt-3">
                        <div className="card">
                            <img src={product.image} style={{ maxHeight: '300px' }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text description" >{product.description}</p>
                                <p className='card-text'><strong>Price: {product.price}</strong></p>
                                <button to="/category/varitege" className="btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

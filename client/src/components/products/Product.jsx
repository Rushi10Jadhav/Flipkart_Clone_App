import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/productAction'
import "./Product.css"
import ProductItem from './ProductItem'

const Product = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.getProducts)
    const [data, setData] = useState([])
    dispatch(getProducts())
    
    useEffect(() => {
        console.log(products)
        setData(products)
    }, [])
    

    const sortLtoH = () => {
        const sorted = products.sort((a, b) => a.price.cost - b.price.cost)
        setData(sorted)
    }
    const sortHtoL = () => {
        const sortedl = products.sort((a, b) => b.price.cost - a.price.cost)
        setData(sortedl)
    }

  return (
    
    <div>
        <div className='top-navbar'>
            <h4>Electronics</h4>
            <h4>TVs & Appliances</h4>
            <h4>Men</h4>
            <h4>Women</h4>
            <h4>Baby & Kids</h4>
            <h4>Home & Furniture</h4>
            <h4>Sports, Books & More</h4>
            <h4>Flights</h4>
            <h4>Offer Zone</h4>
            <h4>Grocery</h4>
        </div>
        <div className='sort'>
            <p onClick={() => setData(data)}>Sort By</p>
            <p onClick={sortLtoH}>Price -- Low to High</p>
            <p onClick={sortHtoL}>Price -- High to Low</p>
        </div>
        <div className='product-grid'>
        
            {data.map((item) => {
                return (
                    <ProductItem item={item} />
                )
            })}
        </div>
    </div>
  )
}

export default Product
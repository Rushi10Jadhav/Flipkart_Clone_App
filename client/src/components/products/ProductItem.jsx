import React from 'react'
import { Link } from 'react-router-dom'
import { addElipsis } from '../../utils/common-utils.js'

const ProductItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  return (
    <div>
        <div className='product-item-box'>
            <Link to={`/product/${item.id}`}><img src={item.url} alt="" className='product-item-image' /></Link>
            <p className='product-item-title'>{item.title.longTitle}</p>
            <div className='product-item-desc'>
                <div className='product-item-rating'>
                    <p>3.6</p>
                    <i className="fa-solid fa-star"></i>
                </div>
                <img src={fassured} alt="" className='fassured' />
            </div>
            <div className='product-item-price'>
                <p style={{fontSize: 16}}>₹{item.price.cost}</p>
                <p style={{fontSize: 14, textDecoration: "line-through", color: "#878787"}}>₹{item.price.mrp}</p>
                <p style={{fontSize: 13, color: "#388e3c"}}>{item.price.discount} Off</p>
            </div>
            <p>{item.tagline}</p>
        </div>
    </div>
  )
}

export default ProductItem
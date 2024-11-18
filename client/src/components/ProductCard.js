import React from 'react'
 import './ProductCard.css'
import { Link } from 'react-router-dom'
function ProductCard({product}) {
  return (
   

    <Link to={`/details/${product?._id}`} style={{color:"white"}}>
    <div className='productcard'>
    <div className="container" >
  <div className="row">
    <div className="col" style={{height:"60px"}}>
      <div className="card-sl">
        <div className="card-image">
          <img src={product?.img} />
        </div>
        {/* <a className="card-action" href="#">
          <i className="fa fa-heart" />
        </a> */}
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{product?.category}</h3>
        <div className="card-heading" style={{color:"black"}}>{product?.name} </div>
        <div className="card-text">
        {product?.description} 
        </div>
        <div className="card-text">{product?.price} DT </div>
    
     
     
      </div>
    </div>
  </div>
</div>
</div>
   
</Link>
  )
}

export default ProductCard
import React from 'react'
import{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editproduct, updateProduct } from '../JS/productslice';
import './Edituser.css'
function EditProduct({el, ping, setping}) {
    const [show, setshow] = useState(false)
    const dispatch = useDispatch();
    const [edited, setedited] = useState({
      name:el?.name,
      img:el?.img,
      description:el?.description,
      price:el?.price,
      category:el?.category,
   
      details:el?.details,
      images:el?.images
     
    });             

     
    
 
  return (
    <div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mx-1" onClick={()=>setshow(!show)}>edit</button>
        {show?<div className="modall2">
    <h2>Edit Service</h2>

        <input 
            type="text" 
            name="name"
            value={edited.name}
            onChange={(e)=>setedited({...edited, name:e.target.value})}
            placeholder="Service Name" 
            required 
        />
        <input 
            type="text" 
            name="description"
            value={edited.description}
            onChange={(e)=>setedited({...edited, description:e.target.value})}
            placeholder="Service Description" 
            required 
        />
        <input 
            type="text" 
            name="price"
            value={edited.price}
            onChange={(e)=>setedited({...edited,price:e.target.value})}
            placeholder="Service Price" 
            required 
        />
        <input 
            type="text" 
            name="category"
            value={edited.category}
            onChange={(e)=>setedited({...edited, category:e.target.value})}
            placeholder="Service Category" 
            required 
        />
        <button onClick={()=>{dispatch(editproduct({id:el?._id, edited}));setping(!ping)}}>Update Service</button>
        <button type="button" onClick={()=>setshow(false)}>Cancel</button>

</div>:null}</div>
  )
}

export default EditProduct
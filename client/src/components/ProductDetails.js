import React, { useEffect, useState } from 'react'
import "./productDetails.css"
import Table from 'react-bootstrap/Table';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adddemande } from '../JS/demandeSlice';
import Swal from 'sweetalert2'
function ProductDetails({ping, setping}) {
    useEffect(() => {
        let image=document.getElementById("image");

        let btn1=document.getElementById("btn1");
        let btn2=document.getElementById("btn2");
        let btn3=document.getElementById("btn3");
        
        btn1.addEventListener("click", function(){
            image.src=btn1.firstElementChild.src;
        })
        btn2.addEventListener("click", function(){
            image.src=btn2.firstElementChild.src;
        })
        btn3.addEventListener("click", function(){
            image.src=btn3.firstElementChild.src;
        })
    }, [])
    const user = useSelector((state) => state.user.user);
    const products=useSelector((state)=>state.product.productlist);
    const params=useParams();
    const product=products?.filter((el)=>el._id===params.id)[0];
    const dispatch=useDispatch()
    const [newdemande, setnewdemande] = useState(
      {
        id_user:user?._id,
        name_user:user?.name+" "+ user?.lastname,
        tel_user:"",
        email_user:user?.email,
        name_product:product?.name,
        img_product:product?.img,
        prix:product?.price,
        date:new Date()
    }
      
    )
  return (
    <>
    <div>
      

<nav aria-label="Breadcrumb" className='detail'>
  <ol className="flex items-center gap-1 text-sm text-gray-600">
    <li>
    <Link to="/"><a href="" className="block transition hover:text-gray-700 font-bold">
        <span className="sr-only"> Home </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a> </Link>
    </li>

    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </li>

    <li>
    <Link to="/services"><a href="" className=" block transition hover:text-gray-700 font-bold "> {product?.category} </a></Link>
    </li>

    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a className="block transition hover:text-gray-700 font-bold">{product?.name} </a>
    </li>
  </ol>
</nav>
    </div>
    <div className='containerr'>
        <h1>{product?.name}</h1>
        <h3>{product?.description}</h3>
        <hr width="50%"/>
        <div className="parent">

<div className="bigbox">

    <img id="image"

        src={product?.img}

        alt=""/>
<h1 className='text-red-600'>{product?.price} TND</h1>
</div>

<div className="images">

    <button id="btn1"> <img

            src={product?.images[0]}

            alt="" className="im" id="im1"/></button>

    <button id="btn2"> <img

            src={product?.images[1]}

            alt="" className="im" id="im1"/></button>

    <button id="btn3"> <img

            src={product?.images[2]}

            alt="" className="im" id="im1"/></button>

</div>

</div>
<h3 style={{marginTop:"46px", textTransform:"uppercase", fontWeight:"bold"}}>Fichier technique</h3>
<hr width="50%"/>

    <Table responsive="lg" style={{width:"812px", fontSize:"16px", marginBottom:"60px"}}>
        <thead>
          <tr>
          
            <th>Nombre de cylindres</th>
            <th>Energie</th>
            <th>Puissance Fiscale</th>
            <th>Vitesse Maxi</th>
            <th>Boite</th>
       
          </tr>
        </thead>
        <tbody>
          <tr>
           
            <td>{product?.details[0]}</td>
            <td>{product?.details[1]}</td>
            <td>{product?.details[2]}</td>
            <td>{product?.details[3]}</td>
            <td>{product?.details[4]}</td>
          
          </tr>
          
        </tbody>
      </Table>
      

<button className='commande inline-block rounded bg-red-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-red-500' onClick={()=>{dispatch(adddemande(newdemande));setping(!ping);Swal.fire({
  title: "Good job!",
  text: "Votre demande est bien envoyée",
  icon: "success"
});}}><span>Demander</span><span>un devis gratuitement</span></button> 




    </div>
    </>
  )
}

export default ProductDetails
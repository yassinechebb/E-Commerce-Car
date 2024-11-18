import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './Services.css'
import ProductCard from './ProductCard';
import Footer from './Footer';

function Services() {
    const [category, setcategory] = useState("all")
    const products=useSelector((state)=>state.product.productlist);
    console.log(products)
  return (
    <>
      <section style={{backgroundColor:"white"}}>
        <div className="explore-menu-list">
        <button onClick={()=>setcategory("alpha")}> <div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/1.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("audi")}><div className="explore-menu-list-item">
    <img className="active" src="https://catalogue.automobile.tn/marques/2.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("bako")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/1675.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("bestune")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/1669.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("bmw")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/3.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("hunter")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/1655.png?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Chevrolet")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/4.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Citroën")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/5.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Cupra")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/1665.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Dacia")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/64.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("DFSK")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/1602.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Faw")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/1647.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Fiat")}><div className="explore-menu-list-item">
    <img className="" src="	https://catalogue.automobile.tn/marques/88.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Foday")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/1653.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Ford")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/6.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("GAC")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/1661.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Geely")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/1615.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Haval")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/1550.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Honda")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/188.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Hyundai")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/216.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Jeep")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/690.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("KIA")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/7.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Land Rover")}><div className="explore-menu-list-item">
    <img className="" src="	https://catalogue.automobile.tn/marques/137.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Mercedes-Benz")}><div className="explore-menu-list-item">
    <img className="" src="	https://catalogue.automobile.tn/marques/9.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("MG")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/904.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Mini")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/198.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Mitsubishi")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/1504.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("Nissan")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/10.webp?t=18" alt="" />
    
  </div></button>
  <button onClick={()=>setcategory("byd")}><div className="explore-menu-list-item">
    <img className="" src="https://catalogue.automobile.tn/marques/1656.webp?t=18" alt="" />
    
  </div></button>
  
 
</div>
<hr/>
     
        {/* <section>
        <div className="explore-menu-list">
        {productlist.map((item, index) => {
          return (
            <div onClick={()=>setcategory(prev=>prev===item.menu_image.name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr/>
        </section> */}
    <div className='productlist'>
        {category!=="all"?products?.filter((el)=>el?.category==category).map((el)=><ProductCard product={el}/>):products?.map((el)=><ProductCard product={el}/>)}
    </div>
    </section> 
    <Footer/>
    </>
  )
}

export default Services
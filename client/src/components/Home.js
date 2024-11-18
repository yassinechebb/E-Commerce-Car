import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
import "./Home.css"
import Data from './Data';
import Caroproduct from './Caroproduct';
import { Button } from 'bootstrap';
import Search from './Search';
import FakeData from './FakeData';
import CarItem from './CarItem';
function Home() {
  
  return (
    <>
    <div className='hero'>
      <div className='flex flex-col items-center p-10 py-20 gap-6 h-[470px] w-full bg-[#c1c3d1] '>
      <div>
  <div className="relative flex items-center justify-center h-36">
    <p className="text-7xl font-black leading-tight" x-text="text" >Find Your Dream Car</p>
   
  </div>
</div>
<div>
        <img src='https://purepng.com/public/uploads/large/51506279568up6kuhwnvttuwkyjaa5n8lyf4nxngnqdglumgtnfyukgzx1soemski0qqujv739xdzgog29s6vezg4gxg7wjqdrsupcnsal4wrd3.png' className='mt-10'/>

        </div>
      </div>
    </div>
    <div className='mt-80'>
      <h2 className='font-blod text-3xl text-center mb-6'>Browse By Type</h2>
   
 
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20'>
        {Data.Category.map((category,index)=>(
          <div className='border rounded-xl p-3 items-center flex flex-col hover:shadow-2xl cursor-pointer'>
            <img src={category.icon} width={35} height={35}/>
            <h3 className='mt-2'>{category.name}</h3>
          </div>
        ))}
      </div>
<Caroproduct/>
    </div>
    <div className='mt-40'>
      <h2 className='font-blod text-3xl text-center mb-16'>Most Car</h2>
      <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://www.expressandstar.com/resizer/CZjg-7h1PRTPmb9DKF4oOxhVsHQ=/1200x0/cloudfront-us-east-1.images.arcpublishing.com/mna/BPSXTGU7G5FBJKPC5PDRHEUAGY.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-300">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-6xl">
          Audi E-tron GT
          </h2>

          <p className="mt-4 text-gray-600 text-4xl">
          The new Audi RS e-tron GT performance model exudes confidence 
          down to the smallest details, featuring exclusive 21-inch lightweight
           alloy wheels with a 6-double-spoke RS design, precisely milled and turned, 
           with a glossy black finish.
          </p>

          <a
            href="http://localhost:3000/details/672a25477477e02ad12961de  "
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-indigo-400 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    <div>
    
    </div>
    <section class="px-4 py-24 mx-auto max-w-7xl">
  <h1 class="mb-20 text-2xl font-bold tracking-wide text-center text-gray-800 uppercase ">We’re proud to have played a part in these amazing journeys.</h1>
  <div class="grid grid-cols-2 gap-10 text-center lg:grid-cols-8">
    <div class="flex items-center justify-center">
      <img src="https://logos-world.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png" alt="Todoist Logo" class="block object-contain h-40" />
    </div>
    <div class="flex items-center justify-center">
      <img src="https://www.freepnglogos.com/uploads/bmw-brand-logo-0.png" alt="Slack Logo" class="block object-contain h-40" />
    </div>
    <div class="flex items-center justify-center">
      <img src="https://logos-world.net/wp-content/uploads/2023/09/Toyota-Supra-Logo.png" alt="Typeform Logo" class="block object-contain h-40" />
    </div>
    <div class="flex items-center justify-center">
      <img src="https://www.carlogos.org/logo/Land-Rover-logo-2011-1920x1080.png" alt="Algolia Logo" class="block object-contain h-40" />
    </div>
    <div class="flex items-center justify-center">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F03%2FAudi-Emblem.png&f=1&nofb=1&ipt=a0c64a474506acbb3a0ecf4c93cd4c571ee191e7b4ab29905f37ac470adaf754&ipo=images" alt="Postcss Logo" class="block object-contain h-40" />
    </div>
    <div class="flex items-center justify-center">
      <img src="https://logos-world.net/wp-content/uploads/2021/03/Jaguar-Logo-2012-present.png" alt="TailwindCSS Logo" class="block object-contain h-40" />
    </div>
    <div class="flex items-center justify-center">
      <img src="https://www.carlogos.org/logo/Rolls-Royce-logo-2048x2048.png" alt="Discord Logo" class="block object-contain h-40" />
    </div>
    <div class="flex items-center justify-center">
      <img src="https://logos-world.net/wp-content/uploads/2021/03/Lamborghini-Logo.png" alt="Vimeo Logo" class="block object-contain h-40" />
    </div>
  </div>
</section>
<Footer/>
    </>

//     <div>
//         <section className='caro'>
//         <Carousel data-bs-theme="dark">
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://news.automobile.tn/2024/11/hannibal-lease-et-asian-auto-2534_max.webp?t=1730732540"
//           alt="First slide"
//         />
//         <Carousel.Caption>
         
        
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://news.automobile.tn/2024/11/japan-mobility-show-2024-2535_max_home.webp?t=1730798037"
//           alt="Second slide"
//         />
//         <Carousel.Caption>
        
        
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://news.automobile.tn/2024/11/kia-tasman-le-nouveau-pick-up-revolutionnaire-qui-redefinit-les-normes-du-secteur-2536_max_home.webp?t=1730732613"
//           alt="Third slide"
//         />
//         <Carousel.Caption>
        
        
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://news.automobile.tn/2024/11/artes-lance-la-3e-edition-2024-des-journees-apres-vente-2531_max_home.webp?t=1730716920"
//           alt="Second slide"
//         />
//         <Carousel.Caption>
        
        
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://news.automobile.tn/2024/10/partenariat-honda-atl-offre-8eme-anniversaire-2528_max.webp?t=1730731748"
//           alt="Second slide"
//         />
//         <Carousel.Caption>
        
        
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://galerie.automobile.tn/min/2024/10/le-premier-taxi-100-electrique-en-tunisie-est-un-byd-88357.webp"
//           alt="Second slide"
//         />
//         <Carousel.Caption>
        
        
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//         </section>
//         {/* <section>
//         <div className="car-section">
//     <h2>Prix du Neuf</h2>
//     <p>Derniers Modèles</p>
//     <div className="car-container">
    
//         <div className="car-item">
//             <div className="car-image">
//                 <img src="https://catalogue.automobile.tn/max/2024/08/47191.webp?t=1723202788" alt="KIA Picanto"/>
//                 <span className="label">NOUVEAU</span>
//             </div>
//             <h3>KIA PICANTO</h3>
//             <p>à partir de <strong>52 480 DT</strong></p>
//         </div>
   
//         <div className="car-item">
//             <div className="car-image">
//                 <img src="https://catalogue.automobile.tn/max/2024/08/47187.webp?t=1723278434" alt="MG Marvel R"/>
//                 <span className="label">NOUVEAU</span>
//             </div>
//             <h3>MG MARVEL R</h3>
//             <p>à partir de <strong>149 950 DT</strong></p>
//         </div>
   
//         <div className="car-item">
//             <div className="car-image">
//                 <img src="https://catalogue.automobile.tn/max/2024/08/47186.webp?t=1723278407" alt="MG 4"/>
//                 <span className="label">NOUVEAU</span>
//             </div>
//             <h3>MG 4</h3>
//             <p>à partir de <strong>99 950 DT</strong></p>
//         </div>
   
//         <div className="car-item">
//             <div className="car-image">
//                 <img src="https://catalogue.automobile.tn/max/2024/07/47182.webp?t=1722940720" alt="Hyundai Azera Hybride"/>
//                 <span className="label">NOUVEAU</span>
//             </div>
//             <h3>HYUNDAI AZERA HYBRIDE</h3>
//             <p>à partir de <strong>249 950 DT</strong></p>
//         </div>
//     </div>
// </div>
              
//         </section> */}
//         <Caroproduct/>
      
//         <section class="header">
//         <h1>OCCASIONS À LA UNE</h1>
//         <p>UN GRAND CHOIX DE VOITURES D'OCCASION</p>
//     </section>
//     <section class="car-listings">
//         <div class="car-card">
//             <img src="https://catalogue.automobile.tn/max/2024/10/106614_max.webp?t=1727775033" alt="Mercedes-Benz Classe C 200"/>
//             <h3>Mercedes-Benz Classe C 200...</h3>
//             <ul class="details">
//                 <li> Kilométrage: 111 000 km</li>
//                 <li> Mise en circulation:2019</li>
//                 <li> Boite vitesse:Automatique</li>
//                 <li> Énergie:Hybride</li>
//                 <li> Transmission:Traction</li>
//                 <li> Puissance: fiscale:10 cv</li>
//                 <li> Gouvernorat:Ariana</li>
//             </ul>
//             <div class="price">159 000 DT</div>
//         </div>
        
//         <div class="car-card">
//             <img src="https://catalogue.automobile.tn/max/2024/10/107364_max.webp?t=1729794508" alt="Mercedes-Benz Classe C"/>
//             <h3>Mercedes-Benz Classe C</h3>
//             <ul class="details">
//                 <li>Kilométrage:200 000 km</li>
//                 <li>Mise en circulation:2014</li>
//                 <li>Boite vitesse:Automatique</li>
//                 <li>Énergie:Essence</li>
//                 <li>Transmission:Propulsion</li>
//                 <li>Puissance:8 cv</li>
//                 <li>Gouvernorat:Sfax</li>
//             </ul>
//             <div class="price">97 000 DT</div>
//         </div>

//         <div class="car-card">
//             <img src="https://catalogue.automobile.tn/max/2023/08/94013_max.webp?t=1692733301" alt="Mercedes-Benz Classe S S350"/>
//             <h3>Mercedes-Benz Classe S S350...</h3>
//             <ul class="details">
//                 <li>Kilométrage:147 000 km</li>
//                 <li>Mise en circulation:2009</li>
//                 <li>Boite vitesse:Automatique</li>
//                 <li>Énergie:Essence</li>
//                 <li>Transmission:Traction</li>
//                 <li>Puissance:19 cv</li>
//                 <li>Gouvernorat:Tunis</li>
//             </ul>
//             <div class="price">98 000 DT</div>
//         </div>

//         <div class="car-card">
//             <img src="https://catalogue.automobile.tn/max/2024/08/105328_max.webp?t=1726565214" alt="Peugeot 3008"/>
//             <h3>Peugeot 3008</h3>
//             <ul class="details">
//                 <li>Kilométrage:90 000 km</li>
//                 <li>Mise en circulation:2019</li>
//                 <li>Boite vitesse:Manuelle</li>
//                 <li>Énergie:Essence</li>
//                 <li>Transmission:Traction</li>
//                 <li>Puissance:7 cv</li>
//                 <li>Gouvernorat:Tunis</li>
//             </ul>
//             <div class="price">73 000 DT</div>
//         </div>
//     </section>
//         <section>
//             <Footer/>
//         </section>
//     </div>
  )
}

export default Home
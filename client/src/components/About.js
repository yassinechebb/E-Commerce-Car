import React from 'react'
import './About.css'
import Footer from './Footer'
function About() {
  return (
    <div >
  <div>
      <div className='flex flex-col items-center p-10 py-20 gap-6 h-[470px] w-full bg-[#c1c3d1] '>
      <div>
  <div className="relative flex items-center justify-center h-36">
    <p className="text-7xl font-black leading-tight" x-text="text" >About US</p>
   
  </div>
</div>
<div className='imagee'>
        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-red-ferrari-488-gtb-carcarferrarivehicletransportsuper-car-961524651528suegx.png&f=1&nofb=1&ipt=9d5d84c67f745ac404ca84b2e7262ebccff81b8e0f421456e2086857f36a4c16&ipo=images' className='mt-10 'style={{ "width": "1149px"}}/>

        </div>
      </div>
    </div>
<div>
<div className="contentt mt-80">
    <p>The experts here at <em>Car and Driver</em><br></br> have been evaluating and testing hundreds of new cars every year since 1956. From performance metrics such as acceleration times and cornering grip to consumer-oriented insights such as real-world highway mpg and carry-on suitcase capacity, we test it all. With more than a half-century of collected data, and a staff of highly educated car enthusiasts, we don't claim to be the best source of shopping advice. We are the best. Our experts provide detailed car-buying guidance by driving every car that enters the market and analyzing our own test results as well as automaker specifications. Whether you're looking for new or used cars, lease deals or tire specials, our Buyer's Guide has it all.</p>
</div>
</div>

  




    
<Footer/>
    </div>
  )
}

export default About
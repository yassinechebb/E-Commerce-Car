import React from 'react'
import Footer from './Footer'

function Contact() {
  return (
/* <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
  <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
    <h2 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
      Contacts US
    </h2>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
    <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
      <img
        className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
        src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Contacts Image"
      />
    </div>
    <div className="space-y-8 lg:space-y-16">
      <div>
        <h3 className="mb-5 font-semibold text-black dark:text-white">
          Our address
        </h3>
       
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <div className="flex gap-4">
            <svg
              className="shrink-0 size-5 text-gray-500 dark:text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx={12} cy={10} r={3} />
            </svg>
            <div className="grow">
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                United Kingdom
              </p>
              <address className="mt-1 text-black not-italic dark:text-white">
                300 Bath Street, Tay House
                <br />
                Glasgow G2 4JR
              </address>
            </div>
          </div>
        </div>
      
      </div>
      <div>
        <h3 className="mb-5 font-semibold text-black dark:text-white">
          Our contacts
        </h3>
       
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <div className="flex gap-4">
            <svg
              className="shrink-0 size-5 text-gray-500 dark:text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
            </svg>
            <div className="grow">
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Email us
              </p>
              <p>
                <a
                  className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                  href="mailto:example@site.so"
                >
                  hello@example.so
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <svg
              className="shrink-0 size-5 text-gray-500 dark:text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div className="grow">
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Call us
              </p>
              <p>
                <a
                  className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                  href="mailto:example@site.so"
                >
                  +44 222 777-000
                </a>
              </p>
            </div>
          </div>
        </div>
       
    </div>
    
  </div>
</div> */






    <section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe
      width="100%"
      height="100%"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="map"
      scrolling="no"
      src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
    />
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Feedback
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Post-ironic portland shabby chic echo park, banjo fashion axe
      </p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Button
      </button>
      <p className="text-xs text-gray-500 mt-3">
        Chicharrones blog helvetica normcore iceland tousled brook viral
        artisan.
      </p>
    </div>
  </div>
  <Footer/>
</section>



//     <div className='contact'>
//         <div className="contact-container">
//     <div className="contact-info px-4 py-24 mx-auto max-w-7xl">
//         <div className="contact-item flex items-center justify-center p-6 bg-opacity-25 bg-primary-light">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
//             <p className='block object-contain h-16'>confort.autocar@planet.tn</p>
//         </div>
//         <div className="contact-item flex items-center justify-center p-6 bg-opacity-25 bg-primary-light">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
//             <p>(+216) 73 322 206</p>
//         </div>
//         <div className="contact-item flex items-center justify-center p-6 bg-opacity-25 bg-primary-light">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
//             <p>Z.I. SIDI ABDELHAMID, 4061 Sousse - Tunisie</p>
//         </div>
//     </div>

//     <div className="map">
//         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2288.5849091174873!2d10.671210348005685!3d35.786482400253774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x212ff7bce59113ca!2sConfort+Auto-Car!5e0!3m2!1sfr!2stn!4v1565061360698!5m2!1sfr!2stn" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
//     </div>

//     <div className="contact-form">
//         <h3>N’HÉSITEZ PAS DE NOUS CONTACTER!</h3>
//         <form id="contactForm">
//             <input type="text" id="name" placeholder="Nom complet / Nom de la société *" required/>
//             <input type="tel" id="phone" placeholder="Tel. *" required/>
//             <input type="email" id="email" placeholder="Email *" required/>
//             <input type="text" id="subject" placeholder="Sujet *" required/>
//             <textarea id="message" placeholder="Message *" required></textarea>
//             <button type="submit">ENVOYER</button>
//         </form>
//     </div>
// </div>


//     </div>
  )
}

export default Contact
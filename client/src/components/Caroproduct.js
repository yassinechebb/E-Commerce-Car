import React, { useEffect } from 'react'
import "./caroproduct.css"



function Caroproduct() {

  
    
  return (
    <div className='caroproduct'>
    <div className="viewed">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="bbb_viewed_title_container">
            <h3 className="bbb_viewed_title">Recently Viewed</h3>
            
          </div>
          <div className="bbb_viewed_slider_container">
            <div className="owl-carousel owl-theme bbb_viewed_slider">
              <div className="owl-item">
                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="bbb_viewed_image">
                    <img
                      src="https://catalogue.automobile.tn/max/2024/09/47227.webp?t=1728033911"
                      alt=""
                    />
                  </div>
                  <div className="bbb_viewed_content text-center">
                    <div className="bbb_viewed_price">
                    129 900 DT
                    </div>
                    <div className="bbb_viewed_name">
                      <a href="#">Suzuki Jimny 5P</a>
                    </div>
                  </div>
                  <ul className="item_marks">
                    <li className="item_mark item_discount">-25%</li>
                    <li className="item_mark item_new">new</li>
                  </ul>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="bbb_viewed_image">
                    <img
                      src="https://catalogue.automobile.tn/max/2024/10/47239.webp?t=1728394760"
                      alt=""
                    />
                  </div>
                  <div className="bbb_viewed_content text-center">
                    <div className="bbb_viewed_price">333 200 DT</div>
                    <div className="bbb_viewed_name">
                      <a href="#">BMW i5</a>
                    </div>
                  </div>
                  <ul className="item_marks">
                    <li className="item_mark item_discount">-25%</li>
                    <li className="item_mark item_new">new</li>
                  </ul>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="bbb_viewed_image">
                    <img
                      src="https://catalogue.automobile.tn/max/2024/09/47232.webp?t=1728983934"
                      alt=""
                    />
                  </div>
                  <div className="bbb_viewed_content text-center">
                    <div className="bbb_viewed_price">197 980 DT</div>
                    <div className="bbb_viewed_name">
                      <a href="#">Volkswagen Tiguan</a>
                    </div>
                  </div>
                  <ul className="item_marks">
                    <li className="item_mark item_discount">-25%</li>
                    <li className="item_mark item_new">new</li>
                  </ul>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="bbb_viewed_image">
                    <img
                      src="https://catalogue.automobile.tn/max/2024/04/47123.webp?t=1713954057"
                      alt=""
                    />
                  </div>
                  <div className="bbb_viewed_content text-center">
                    <div className="bbb_viewed_price"> 299 000</div>
                    <div className="bbb_viewed_name">
                      <a href="#">Audi Q8 E-tron</a>
                    </div>
                  </div>
                  <ul className="item_marks">
                    <li className="item_mark item_discount">-25%</li>
                    <li className="item_mark item_new">new</li>
                  </ul>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="bbb_viewed_image">
                    <img
                      src="https://catalogue.automobile.tn/max/2024/10/47238.webp?t=1728304485"
                      alt=""
                    />
                  </div>
                  <div className="bbb_viewed_content text-center">
                    <div className="bbb_viewed_price">
                    135 000 DT<span>105 000 DT</span>
                    </div>
                    <div className="bbb_viewed_name">
                      <a href="#">JAC T8 Pro Double Cabine</a>
                    </div>
                  </div>
                  <ul className="item_marks">
                    <li className="item_mark item_discount">-25%</li>
                    <li className="item_mark item_new">new</li>
                  </ul>
                </div>
              </div>
              <div className="owl-item">
                <div className="bbb_viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="bbb_viewed_image">
                    <img
                      src="https://catalogue.automobile.tn/max/2024/07/47180.webp?t=1721727552"
                      alt=""
                    />
                  </div>
                  <div className="bbb_viewed_content text-center">
                    <div className="bbb_viewed_price">398 000 DT</div>
                    <div className="bbb_viewed_name">
                      <a href="#">Toyota Prado</a>
                    </div>
                  </div>
                  <ul className="item_marks">
                    <li className="item_mark item_discount">-25%</li>
                    <li className="item_mark item_new">new</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Caroproduct
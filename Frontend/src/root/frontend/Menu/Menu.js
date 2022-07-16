import React from 'react'
import './Menu.css'
import Menu1 from '../images/Menu1.png'
import Menu2 from '../images/Menu2.png'
import Menu3 from '../images/Menu3.png'
import Footer from '../components/Footer';

function Menu() {
  return (
    <div>
    <div className='Menu-Main-Content'>
        <div className='Menu-Heading'>
            <br/>
            <h1> Our Menu </h1>
        </div>
        <div className='card'>
          <div className='Coffee-Card'>
            <img src={Menu1} alt="Menu 01"/>
            <div className='PriceList1'>
              <div>
                <p> Café Cream (Small) </p>
                <p> Café Cream (Large) </p>
                <p> Cappuccino (Small) </p>
                <p> Cappuccino (Large) </p>
                <p> latte              </p>
                <p> Iced Coffee        </p>
                <p> Espresso           </p>
                <p> Double Espresso    </p>
              </div>
              <div>
                <p> -- Rs. 200 </p>
                <p> -- Rs. 300 </p>
                <p> -- Rs. 350 </p>
                <p> -- Rs. 400 </p>
                <p> -- Rs. 400 </p>
                <p> -- Rs. 200 </p>
                <p> -- Rs. 330 </p>
                <p> -- Rs. 390 </p>
              </div>
            </div>
          </div>

          <div className='Coffee-Card2'>
            <img src={Menu2} alt="Menu 02"/>
            <div className='PriceList2'>
              <div>
                <p> Croissant (Plain) </p>
                <p> Croissant (Cheese) </p>
                <p> Croissant (Ham and cheese) </p>
                <p> Croissant (Chocolate) </p>
                <p> Croissant (Hazelnut) </p>
              </div>
              <div>
                <p> -- Rs. 200 </p>
                <p> -- Rs. 300 </p>
                <p> -- Rs. 350 </p>
                <p> -- Rs. 400 </p>
                <p> -- Rs. 400 </p>
              </div>
            </div>
          </div>
        </div>

        <div className='Coffee-Card3'>
          <img src={Menu3} alt="Menu 03"/>
          <h2> * Special Combo * </h2>
          <div className='PriceList3'>
              <div>
                <p> <b> The Creamy One </b> |  Large Café Crème + Croissant (Hazelnut) </p>
                <p> <b> The Choco One </b> |  Small Cappuccino + Croissant (Chocolate) </p>
                <p> <b> Big Guy </b> |  Any Coffee + Croissant (Cheese) </p>
              </div>
              <div>
                <p> -- Rs. 600 </p>
                <p> -- Rs. 650 </p>
                <p> -- Rs. 700 </p>
              </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Menu

/*



Rs.




Rs.
*/
import React from 'react'
import "./Home.css"
import Product from '../Product'
function Home() {
    return (
        <div className="home">
            <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/jan/Blockbuster_entertainment/EN/3000x1200_Hero-Tall_NP._CB660702447_.jpg" alt=""/>
            <div className="home__row">
                <Product 
                    id="8sfghdn356y4676944"
                    title="Mivi Collar 2B Wireless Earphones. Bluetooth Earphones with Fast Charging"
                    price={20}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Y4Tght13L._SL1500_.jpg"
                />
                <Product 
                    id="867694sdfngh,j4"
                    title="Samsung Galaxy S21 Plus 5G (Phantom Violet, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={1100}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91v6gUJghLL._SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="86dxbfcng76944"
                    title="Asus ROG Strix Fusion 500 Gaming Headset with Headset-to-Headset RGB Light"
                    price={1943}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71CNy7OifpL._SL1500_.jpg"
                />
                <Product 
                    id="8676vsdvfbnfm944"
                    title="Logitech G502 Hero High Performance Wired Gaming Mouse, "
                    price={250}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71OX1L%2BrvbL._SX569_.jpg"
                />
                <Product 
                    id="867svd69scfs44"
                    title="Ant Esports GP300 Pro Wireless Controller, Compatible for PC Laptop Computer"
                    price={110}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61CbvYfkq5L._SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="8676944sdvxcv"
                    title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                    price={11000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81P7RZ9GEnL._SL1500_.jpg"
                />
            </div>
            
        
        </div>
    )
}

export default Home

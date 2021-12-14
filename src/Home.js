import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.pinimg.com/originals/a2/34/c2/a234c2f4f5b82db1b5a4acc7d0575480.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="The lean Startup"
            price={24.99}
            image="https://th.bing.com/th/id/R.9de82ef2da08008a74aa3afbec9f3cf9?rik=zaas85eGaea9BQ&riu=http%3a%2f%2f1.
        bp.blogspot.com%2f-T-d3JPMr-Uk%2fUPshLuidy6I%2fAAAAAAAAFbU%2fvOiHd0qgnC4%2fs1600%2flean-startup_book-cover
        .jpeg&ehk=O90jlIAsVo0HEm3VJD7I%2b0%2fbWRp8HxsmQwJdugopPLU%3d&risl=&pid=ImgRaw&r=0"
            rating={5}
          />
          <Product
            title="Sony WH-CH710N Noise Cancelling Wireless Headphones : Bluetooth Over The Ear Headset with Mic for Phone-Call,
               35 Hours Battery Life, Quick Charge and Google Assitant - Black"
            price={13.98}
            image="https://m.media-amazon.com/images/I/61N6Ai7RkJL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Amazon Brand - Solimo Venosa Fabric 6 Seater RHS L Shape Sofa (Blue)"
            price={16.48}
            image="https://m.media-amazon.com/images/I/91tMzaIomiL._SL1500_.jpg"
            rating={4}
          />
          <Product
            title="Geekay Sturdy Non Gear 26 inch Wheel Road Unisex Cycle | Single Speed Mountain Bike for Boys Girls | for Height 5 feet to 5.5 feet Bicycle
           | 85% Fitted (DIY) Sturdy 26"
            price={12.24}
            image="https://m.media-amazon.com/images/I/81P+U3J+2vS._SL1500_.jpg"
            rating={3}
          />
          <Product
            title="Apple iPhone 13 Pro Max (512GB) - Sierra Blue
                   Visit the Apple Store"
            price={54.99}
            image="https://m.media-amazon.com/images/I/61i8Vjb17SL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)
                   Brand: Amazon"
            price={8.99}
            image="https://m.media-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg"
            rating={3}
          />
          <Product
            title="Nikon D850 45.7MP Digital SLR Camera (Black) with AF-S Nikkor 24-120mm F/4G ED VR Lens and 64GB Memory Card
                   Brand: Nikon"
            price={88.99}
            image="https://m.media-amazon.com/images/I/81WtQ64-SOL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="AmazonBasics 80cm (32 inch) HD Ready Smart LED Fire TV AB32E10SS (Black) (2020 Model)
                   Brand: AmazonBasics"
            price={48.99}
            image="https://m.media-amazon.com/images/I/71m0Nn4vqOL._SL1254_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

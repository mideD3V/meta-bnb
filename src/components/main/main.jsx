import React from "react";
import mainStyle from "./main.css";
import heroImg from "../../asset/hero-img.png";
import heroBanner from "../../asset/hero-banner.png";
import card1 from "../../asset/card1.png";
import card2 from "../../asset/card2.png";
import card3 from "../../asset/card3.png";
import card4 from "../../asset/card4.png";
import card5 from "../../asset/card5.png";
import card6 from "../../asset/card6.png";
import card7 from "../../asset/card7.png";
import card8 from "../../asset/card8.png";
import nftImg from "../../asset/nft.png";

export const Main = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-txt">
          <h1>
            Rent a <span className="purple-txt">Place</span> away from{" "}
            <span className="purple-txt">Home</span> in the{" "}
            <span className="purple-txt">Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="search-box">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for location"
            />
            <label htmlFor="search">
              <a href="#">Search</a>
            </label>
          </div>
        </div>

        <div className="hero-img">
          <img src={heroImg} alt="metaverse home img" />
        </div>
      </section>

      <section id="inspiration">
        <img src={heroBanner} alt="banner" />
        <h2>Inspiration for your next adventure</h2>
        <div className="cards">
          <div className="card">
            <img src={card1} alt="card" />
            <img src={card2} alt="card" />
            <img src={card3} alt="card" />
            <img src={card4} alt="card" />
          </div>
          <div className="card">
            <img src={card5} alt="card" />
            <img src={card6} alt="card" />
            <img src={card7} alt="card" />
            <img src={card8} alt="card" />
          </div>
        </div>
          </section>
          

      <section id="nft">
        <div className="nft-txt">
          <h2>Metabnb NFTs</h2>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <a href="#">Learn more</a>
        </div>
        <div className="nft-img">
          <img src={nftImg} alt="nft img" />
        </div>
      </section>
    </div>
  );
};
export default Main;

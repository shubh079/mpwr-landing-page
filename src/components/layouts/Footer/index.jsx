import React from "react";
import "./footer.scss";
import twitter from "../../../assets/images/twitter1.svg";
import discord from "../../../assets/images/discord1.svg";
import dis1 from "../../../assets/images/dis1.png";
import twit1 from "../../../assets/images/twit1.png";
import copyright1 from "../../../assets/images/copyright1.png";
import copyright2 from "../../../assets/images/copyright2.png";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="row row-height g-0">
        {/* <div className='social_media'> */}
        <div className="col-lg-6 col-12 twitter">
          <div className="image">
            <picture>
              <source media="(max-width:768px)" srcSet={twit1} />
              <source media="(min-width:769px)" srcSet={twitter} />
              <img src={twitter} alt="icon" />
            </picture>
          </div>
          <div className="text">
            <span className="text_finance">twitter.com/clubrare_nft</span>
            <div className="btn_follow">
              <button className="followus">FOLLOW US</button>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-12 discord">
          <div className="text">
            <span className="text_clubrare">discord.gg/clubrare</span>
            <div className="btn_join">
              <button className="joinus">JOIN US</button>
            </div>
          </div>
          <div className="image">
            <picture>
              <source media="(max-width:768px)" srcSet={dis1} />
              <source media="(min-width:769px)" srcSet={discord} />
              <img src={dis1} alt="icon" />
            </picture>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="row g-0">
            <div className="copyright_left col-lg-4">
              <img src={copyright2} className = "twitt" alt="copyright" />
              <img src={copyright1} className= "disc" alt="copyright" />
            </div>

            <div className="copyright_right col-lg-8 d-flex">
              <p>ClubRare Universe</p>
              <p>ClubRare Docs</p>
              <p>ClubRare NFT Marketplace</p>
              <p>ClubRare Metaverse</p>
            </div>

            <div className="support col-lg-4 ">
              <p>support@clubrare.xyz</p>
            </div>
            <div className="terms_conditions col-lg-8 d-flex">
              <p>Terms & Conditions</p>
              <p>Copyright © 2022 ClubRare</p>
            </div>
          </div>
          {/* <span className="text_copyright">2022 © Agov.finance</span> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./bannerSection.scss";
import line from "../../../../assets/images/Line.png";
import token1 from "../../../../assets/images/token_img.png";
import token2 from "../../../../assets/images/token_img2.png";

const BannerSection = () => {
  return (
    <div className="banner_wrp">
      <div className="container">
        <div className="row g-o">
          <div className="col-lg-7">
            <h2>MAKE THE METAVERSE<br/> YOUR OWN WITH $MPWR</h2>
            <p>
              MPWR is ClubRare's core utility token for building the Phygital<br/>
              Metaverse ecosystem as well as the main currency for the<br/> ClubRare
              Metaverse. Be part of the revolution.
            </p>
            <img src="" alt="" />
            <div className="btn_mpwr">
              <button className="btn_uniswap">Buy on Uniswap</button>
              <button className="btn_stake">STAKE $MPWR</button>
            </div>

            <img src={line} className="line_image" alt="line" />

            <div className="token_values_wrp">
              <div className="token_values">
                <p>
                  $6.29 <span>Token value</span>
                </p>
                <p>
                  $61,026,562 <span>Market Cap</span>
                </p>
                <p>
                  $9,705,556 <span>Circulating Supply</span>
                </p>
                <p>
                  $2,063 <span>Staked</span>
                </p>

                <div className="token_img">
                  <img src={token1} alt="token" />
                  <img src={token2} alt="token" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 etherum_img"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

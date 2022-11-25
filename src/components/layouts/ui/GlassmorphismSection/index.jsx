import React from 'react';
import "./glassmorphismsection.scss";
import uniswap from "../../../../assets/images/uniswap.svg";
import etherson from "../../../../assets/images/etherson.svg";
import ring from "../../../../assets/images/glass_etherum.png";

const GlassMorphism = () => {
  return (
    <div>
        <div className="glassmorphism_wrp">
        
        <p>MAKE THE METAVERSE YOUR</p>
        <h3>OWN WITH $MPWR</h3>
          <img src={ring} className="glassmorphism_eth" alt="ring" />

        <div className="glassmorphism mx-auto">
          <div className="row g-0">
            
            <div className="col-lg-7 col-12 d-flex justify-content-center align-items-end flex-column gap_mobile ">
            
              <img src={uniswap} className="uniswap_img" alt="image" />
              <div className="glass_btn d-flex gap-4">
             
                <button className="uniswap_btn bg-transparent">
                  <span className="text_uniswap_btn">VIEW GUIDE</span>
                </button>
                <button className="uniswap_btn">
                  <span className="text_uniswap_btn">BUY NOW</span>
                </button>
              </div>
            </div>

            <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center flex-column gap_mobile">
              <img src={etherson} className="etherson_img" alt="image" />
              <button className="etherson_btn">
                <span className="text_scan_btn">Scan</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default GlassMorphism;
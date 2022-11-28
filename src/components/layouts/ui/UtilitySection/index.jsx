import React from "react";
import "./utilitySection.scss";
import uniswap from "../../../../assets/images/uniswap.svg";
import etherson from "../../../../assets/images/etherson.svg";
import ring from "../../../../assets/images/glass_etherum.png";
import mpwr_utility from "../../../../assets/images/mpwr_utility.png";

const UtilitySection = () => {
  return (
    <div className="utility_wrp">
      <div className="container">
        <h1>MPWR UTILITY</h1>
        <div className="card_wrp">
          <div className="row">
            <div className="col-lg-3">
              <div className="card">
                <h2>EARN</h2>
                <p>
                  MPWR holders <span className="text_color">gain bonuses</span> by listing and trading NFTs on
                  ClubRare Marketplace.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <h2>STAKE</h2>
                <p>
                  20% of the entire token pool is reserved for staking rewards.
                  In addition, community members can stake LP NFTs for <span className="text_color">the rewards.</span>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <h2>BATTLE</h2>
                <p>
                  In the upcoming ClubRare Metaverse, users will join guilds and
                  go head-to-head for <span className="text_color">exclusive access</span> to real-world
                  collectibles, and drops from their favorite brands. Players
                  will use MPWR to <span className="text_color">gear up and gain</span> the advantage in quests and
                  skirmishes.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <h2>UNLOCK</h2>
                <p>
                  Users will have a space all their own, and show off their IRL
                  merch in their metaverse showcase. MPWR tokens can be used to
                  <span className="text_color">bring their wardrobe and collectibles to life</span>, and customize
                  every aspect of their experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="utility_button">Learn More</button>

        <div className="buy_tokens">
          <p>Why should I buy tokens </p>
          <p>here and now?</p>

          <div className="development_wrp">
            <div className="row">
              <div className="col-lg-4 d-flex">
                <span>1</span>
                <span>
                  <h6>Fair START, Fair Development</h6>
                  <p>
                    MPWR never had private token sales. The development team and
                    community all receive a transparent and fair
                    <br /> distribution of tokens according to their
                    contributions and support. The long- term goal is full
                    decentralization.
                  </p>
                </span>
              </div>
              <div className="col-lg-4 d-flex">
                <span>2</span>
                <span>
                  <h6>Fair START, Fair Development</h6>
                  <p>
                    The community determines ClubRare's operating policies,
                    <br /> steers the development of
                    <br /> ClubRare products, and gets
                    <br /> MPWR rewarded for their participation.
                  </p>
                </span>
              </div>
              <div className="col-lg-4 d-flex">
                <span>3</span>
                <span>
                  <h6>Fair START, Fair Development</h6>
                  <p>
                    MPWR Project is committed to <br />
                    never using unsustainable
                    <br /> rewards. Contrary to other
                    <br /> projects that offer huge promises
                    <br /> but fail to deliver over time, MPWR
                    <br /> is building long-term economies
                    <br /> within our ecosystem.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <button className="btn_buy_mpwr">BUY MPWR</button>
      </div>

      {/* <div className="glassmorphism_wrp">
        
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
      </div> */}
    </div>
  );
};

export default UtilitySection;

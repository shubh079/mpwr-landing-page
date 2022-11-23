import React from "react";
import "./utilitySection.scss";

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
                  MPWR holders gain bonuses by listing and trading NFTs on
                  ClubRare Marketplace.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <h2>STAKE</h2>
                <p>
                20% of the entire token pool is reserved for staking rewards. In addition, community members can stake LP NFTs for the rewards.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <h2>BATTLE</h2>
                <p>
                In the upcoming ClubRare Metaverse, users will join guilds and go head-to-head for exclusive access to real-world collectibles, and drops from their favorite brands. Players will use MPWR to gear up and gain the advantage in quests and skirmishes.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <h2>UNLOCK</h2>
                <p>
                Users will have a space all their own, and show off their IRL merch in their metaverse showcase. MPWR tokens can be used to bring their wardrobe and collectibles to life, and customize every aspect of their experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="utility_button">Learn More</button>

        <div className="buy_tokens">
          <p>Why should I buy tokens </p>
          <p>here and now?</p>
         
         <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex">
              <span>1</span>
              <span>
              <h6>Fair START, Fair Development</h6>
              <p>
                MPWR never had private token sales. The development team and
                community all receive a transparent and fair<br/> distribution of
                tokens according to their<br/> contributions and support. The
                long-<br/>term goal is full decentralization.
              </p>
              </span>
            </div>
            <div className="col-lg-4 d-flex">
              <span>2</span>
              <span>
              <h6>Fair START, Fair Development</h6>
              <p>
              The community determines ClubRare's operating policies,<br/> steers the development of<br/> ClubRare products, and gets<br/> MPWR rewarded for their participation.
              </p>
              </span>
            </div>
            <div className="col-lg-4 d-flex">
              <span>3</span>
              <span>
              <h6>Fair START, Fair Development</h6>
              <p>
              MPWR Project is committed to <br/>never using unsustainable<br/> rewards. Contrary to other<br/> projects that offer huge promises<br/> but fail to deliver over time, MPWR<br/> is building long-term economies<br/> within our ecosystem.
              </p>
              </span>
            </div>
          </div>
          </div>
        </div>

        <button className="btn_buy_mpwr">BUY MPWR</button>
      </div>
    </div>
  );
};

export default UtilitySection;

import React from "react";
import "./roadmapSection.scss";
// import roadmap_bg from "../../../assets/images/roadmap_bg.svg";
import RoadmapCardSection from "../RoadmapCardSection";
// import circle_roadmap from "../../../assets/images/circle_roadmap.png";
import uniswap from "../../../../assets/images/uniswap.svg";
import etherson from "../../../../assets/images/etherson.svg";
import ring from "../../../../assets/images/glass_etherum.png";

const data1 = ["Fair token stealth launch on the Ethereum blockchain","Uniswap listing","Smart Contract Audit Completion","Staking Rewards Go Live","Trading Rewards Go Live","LP Staking Rewards Go Live"],
  data2 = ["OpenSea User Airdrop","Promotion at NFT.NYC 2022","39 ETH Buyback Event","Collab.Land Integration in Discord","Exclusive holder giveaways in Discord","Metaverse prototype reveal"],
  data3 = ["Marketing begins","Partnership reveal","Migration of Klaytn holders to Ethereum","Integration to ClubRare Marketplace with MPWR benefits","Promoted seller benefit for token stakers","Exclusive access to the next wave of Lazy Leo Club NFT Collection","Listing on TrustWallet","Major Announcement"],
  data4 = ["Metaverse closed alpha","Metaverse open beta","Metaverse full launch","Exclusive Metaverse rewards for early holders and stakers"]
  

const Roadmap = () => {
  return (
    <div className="roadmap_wrp">
      <div className="roadmap_container">
      {/* <div className="glassmorphism_wrp">
        <p>MAKE THE METAVERSE YOUR</p>
        <h3>OWN WITH $MPWR</h3>
          <img src={ring} className="glassmorphism_eth" alt="ring" />

        <div className="glassmorphism mx-auto">
          <div className="row g-0">
            
            <div className="col-lg-8 col-12 d-flex justify-content-center align-items-end flex-column gap_mobile ">
            
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

            <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center flex-column gap_mobile">
              <img src={etherson} className="etherson_img" alt="image" />
              <button className="etherson_btn">
                <span className="text_scan_btn">Scan</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* roadmap section start */}
        <div className="roadmap_heading">
          <h1>ROADMAP</h1>
        </div>
      
      <div className="roadmap_line_image">
        <RoadmapCardSection
          className="roadmap_image"
          heading={"PHASE 1"}
          data={data1}
        />
        <RoadmapCardSection
          className="roadmap_image"
          heading={"PHASE 2"}
          data={data2}
        />
        <RoadmapCardSection
          className="roadmap_image"
          heading={"PHASE 3"}
          data={data3}
        />
        <RoadmapCardSection
          className="roadmap_image"
          heading={"PHASE 4"}
          data={data4}
        />
      </div>
      </div>
    </div>
  );
};

export default Roadmap;
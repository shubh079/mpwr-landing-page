import React from "react";
import "./communitySection.scss";

const CommunitySection = () => {
  return (
    <div className="community_wrp">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <p className="heading">
              FOR THE <span>CREATORS</span>
            </p>
            <p className="community_para">
              By staking MPWR, Creators on ClubRare Marketplace can unlock
              reduced or no-fee<br/> NFT trading and take advantage of<br/> ClubRare's
              premiere shipping and <br/>authentication solutions with major<br/>
              discounts. MPWR holders can also launch<br/> their products in special
              ClubRare<br/> auctions, apply for grants, and pursue<br/> crowdfunding.
            </p>
          </div>
          <div className="col-lg-4">
            <p className="heading">
              FOR THE <span>COLLECTORS</span>
            </p>
            <p className="community_para">
              MPWR will be used as the official currency<br/> of ClubRare Metaverse.
              In a collector's<br/> dedicated showcase area, they can use<br/> MPWR to
              personalize their space, equip<br/> their avatars, join guilds, and
              battle for<br/> exclusive access to real-world limited<br/> merch. Every
              MPWR token spent on in<br/>-universe purchases is burned forever.
            </p>
           
          </div>
          <div className="col-lg-4">
            <p className="heading">
              FOR THE <span>COMMUNITY</span>
            </p>
            <p className="community_para">
              MPWR is fairly launched, fairly run, and<br/> shares profit to holders.
              There are no<br/> private sales. When creators list NFTs, and<br/> when
              Collectors buy and sell them, they<br/> earn MPWR.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;

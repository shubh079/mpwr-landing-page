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
            <p>
              By staking MPWR, Creators on ClubRare Marketplace can unlock
              reduced or no-fee NFT trading and take advantage of ClubRare's
              premiere shipping and authentication solutions with major
              discounts. MPWR holders can also launch their products in special
              ClubRare auctions, apply for grants, and pursue crowdfunding.
            </p>
          </div>
          <div className="col-lg-4">
            <p>
              FOR THE <span>COLLECTORS</span>
            </p>
            <p>
              MPWR will be used as the official currency of ClubRare Metaverse.
              In a collector's dedicated showcase area, they can use MPWR to
              personalize their space, equip their avatars, join guilds, and
              battle for exclusive access to real-world limited merch. Every
              MPWR token spent on in-universe purchases is burned forever.
            </p>
           
          </div>
          <div className="col-lg-4">
            <p>
              FOR THE <span>COMMUNITY</span>
            </p>
            <p>
              MPWR is fairly launched, fairly run, and shares profit to holders.
              There are no private sales. When creators list NFTs, and when
              Collectors buy and sell them, they earn MPWR.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;

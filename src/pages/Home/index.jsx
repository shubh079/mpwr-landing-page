import React from "react";
import "./home.scss";
import BannerSection from "../../components/layouts/ui/BannerSection";
import CommunitySection from "../../components/layouts/ui/CommunitySection";
import PartnerSection from "../../components/layouts/ui/PartnerSection";
import RoadmapSection from "../../components/layouts/ui/RoadmapSection";
import SupplySection from "../../components/layouts/ui/SupplySection";
import UtilitySection from "../../components/layouts/ui/UtilitySection";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import GlassMorphism from "../../components/layouts/ui/GlassmorphismSection";

const Home = () => {
  return (
    <div>
      <div className="bg_image1">
        <Header />
        <BannerSection />
        <CommunitySection />
        <SupplySection />
        <UtilitySection />
      </div>
      

      <div className="bg_image2">
        <GlassMorphism />
        <RoadmapSection />
      </div>

      <div className="footer_bg">
        <PartnerSection />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;

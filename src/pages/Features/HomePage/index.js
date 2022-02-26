import React from "react";
import GoTop from "./GoTop";
import AppDownload from "./SectionAppDownload";
import BannerWrapper from "./SectionBannerWrapper";
import Blog from "./SectionBlog";
import Features from "./SectionFeatures";
import FeaturesEver from "./SectionFeaturesEver";
import Feedback from "./SectionFeedback";
import Overview from "./SectionOverview";
import Partner from "./SectionPartner";
import PricingTable from "./SectionPricingTable";
import Screenshots from "./SectionScreenshots";
import SoftwareIntergrations from "./SectionSoftwareIntegrstions";
import Video from "./SectionVideo";




function HomePage({ navbar, onLoad, gotopActive}) {
  return (
    <div className={navbar ? "page-home page-home-active" : "page-home"}>
      <BannerWrapper onLoad={onLoad} />
      <Partner/>
      <Overview/>
      <Features/>
      <Video/>
      <FeaturesEver/>
      <Screenshots/>
      <SoftwareIntergrations/>
      <AppDownload/>
      <PricingTable/>
      <Feedback/>
      <Blog/>
      <GoTop gotopActive={gotopActive}/>
    </div>
  );
}

export default HomePage;

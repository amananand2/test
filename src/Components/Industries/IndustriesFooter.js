import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight16 } from "@carbon/icons-react";
import MainHeader from "../Homepage/Mainheader/MainHeader";
import FooterBotm from "../Homepage/Footer/FooterBotm";

const IndustriesFooter = () => {
  return (
    <>
      <MainHeader />
      <div className="bx--grid--full-width industry--footer">
        <div class="bx--grid bx--no-gutter">
          <div class="bx--row bx--no-gutter">
            <div class="bx--col-lg-9  bx--no-gutter footer--banner">
              <h2>
                Explore enterprise and business solutions for your industry on
                the Uvation Marketplace
              </h2>
              <h4>
                Transform your business with infrastructure, services and tools
                for integrated cloud computing.
              </h4>
              <div className="fotter--link">
                <Link to="#">Access the Uvation Marketplace</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="bx--row bx--no-gutter footer--btn--row">
          <div class="fotter--link">
            <Link to="#">Send us a message</Link>
            <ArrowRight16 fill="white" />

            <Link to="#">Request a meeting</Link>
            <ArrowRight16 fill="white" />
          </div>
        </div>
      </div>
      <FooterBotm />
    </>
  );
};

export default IndustriesFooter;

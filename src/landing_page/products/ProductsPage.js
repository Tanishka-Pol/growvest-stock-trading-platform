import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/images/kite.png"
        productName="GrowTrade"
        productDesription="A modern trading platform designed to help users monitor markets, track stocks, and manage investments through an intuitive and user-friendly interface."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/images/console.png"
        productName="GrowDashboard"
        productDesription="A personalized dashboard that provides portfolio insights, investment summaries, market trends, and performance analytics in one place."
        learnMore=""
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="GrowFunds"
        productDesription="Explore mutual funds and long-term investment opportunities through a simplified platform designed for beginner and experienced investors."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="GrowAPI"
        productDesription="A developer-friendly API platform that enables integration of financial data, portfolio tracking, and market insights into custom applications."
        learnMore=""
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="GrowLearn"
        productDesription="A learning hub that helps users understand stock markets, investing concepts, portfolio management, and financial planning through simple educational content."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <div className="text-center mt-5 mb-5">
        <h4
          style={{
            color: "#08264A",
            fontWeight: "600",
          }}
        >
          Built with modern technology for a smarter investing experience.
        </h4>
      </div>

      <Universe />
    </>
  );
}

export default ProductsPage;
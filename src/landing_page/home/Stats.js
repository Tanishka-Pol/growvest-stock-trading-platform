import React from "react";

function Stats() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "100px 0",
      }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6">

            <h1
              style={{
                color: "#08264A",
                fontWeight: "700",
                marginBottom: "40px",
              }}
            >
              Invest with confidence
            </h1>

            <div className="mb-4">
              <h4 style={{ color: "#08264A" }}>
                Investor-first approach
              </h4>

              <p className="text-muted">
                GrowVest helps investors build wealth through smart investing,
                market insights, and intuitive financial tools.
              </p>
            </div>

            <div className="mb-4">
              <h4 style={{ color: "#08264A" }}>
                Simple and transparent
              </h4>

              <p className="text-muted">
                No hidden charges, no complicated interfaces, and no
                unnecessary notifications. Investing made simple.
              </p>
            </div>

            <div className="mb-4">
              <h4 style={{ color: "#08264A" }}>
                Complete investment ecosystem
              </h4>

              <p className="text-muted">
                Access stocks, ETFs, mutual funds, IPOs, portfolio tracking,
                and market analysis from one platform.
              </p>
            </div>

            <div>
              <h4 style={{ color: "#08264A" }}>
                Grow your financial future
              </h4>

              <p className="text-muted">
                Powerful tools and real-time insights help you make informed
                investment decisions and achieve your financial goals.
              </p>
            </div>

          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center">

            <img
              src="media/images/ecosystem.png"
              alt="GrowVest Ecosystem"
              className="img-fluid"
              style={{
                maxWidth: "90%",
              }}
            />

            <div className="mt-4">

              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#22C55E",
                  fontWeight: "600",
                  marginRight: "40px",
                }}
              >
                Explore our platform
                <i
                  className="fa fa-long-arrow-right ms-2"
                  aria-hidden="true"
                ></i>
              </a>

              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#22C55E",
                  fontWeight: "600",
                }}
              >
                Try GrowVest Demo
                <i
                  className="fa fa-long-arrow-right ms-2"
                  aria-hidden="true"
                ></i>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Stats;
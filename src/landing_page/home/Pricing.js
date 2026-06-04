import React from "react";

function Pricing() {
  return (
    <section
      style={{
        backgroundColor: "#F8FAFC",
        padding: "100px 0",
      }}
    >
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-5">

            <h1
              style={{
                color: "#08264A",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Transparent pricing
            </h1>

            <p
              style={{
                color: "#64748B",
                fontSize: "1.1rem",
                lineHeight: "1.8",
              }}
            >
              GrowVest offers simple, transparent, and investor-friendly pricing
              with no hidden charges. Invest with confidence and focus on
              growing your wealth.
            </p>

            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#22C55E",
                fontWeight: "600",
              }}
            >
              Explore Pricing
              <i
                className="fa fa-long-arrow-right ms-2"
                aria-hidden="true"
              ></i>
            </a>

          </div>

          <div className="col-lg-1"></div>

          <div className="col-lg-6">

            <div className="row text-center">

              <div className="col-md-6 mb-4">

                <div
                  style={{
                    background: "white",
                    borderRadius: "15px",
                    padding: "30px",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                    height: "100%",
                  }}
                >
                  <h1
                    style={{
                      color: "#22C55E",
                      fontWeight: "700",
                    }}
                  >
                    ₹0
                  </h1>

                  <p className="text-muted">
                    Free portfolio tracking,
                    watchlists, and market insights.
                  </p>
                </div>

              </div>

              <div className="col-md-6 mb-4">

                <div
                  style={{
                    background: "white",
                    borderRadius: "15px",
                    padding: "30px",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                    height: "100%",
                  }}
                >
                  <h1
                    style={{
                      color: "#22C55E",
                      fontWeight: "700",
                    }}
                  >
                    ₹20
                  </h1>

                  <p className="text-muted">
                    Flat fee per executed trade with
                    no hidden charges.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;
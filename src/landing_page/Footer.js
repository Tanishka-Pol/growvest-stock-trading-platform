import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#08264A",
        color: "white",
        marginTop: "80px",
      }}
    >
      <div className="container py-5">

        <div className="row">

          <div className="col-lg-4 mb-4">

            <img
              src="media/images/gem logo.png"
              alt="GrowVest"
              style={{
                width: "180px",
                marginBottom: "20px",
              }}
            />

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              GrowVest is a modern investment platform designed to help
              individuals invest smarter, track portfolios, and achieve
              long-term financial goals.
            </p>

            <p style={{ color: "#94a3b8" }}>
              © 2026 GrowVest. All Rights Reserved.
            </p>

          </div>

          <div className="col-lg-2 mb-4">

            <h5 className="mb-3">Company</h5>

            <p><Link to="/about" className="footer-link">About</Link></p>
            <p><Link to="/product" className="footer-link">Products</Link></p>
            <p><Link to="/pricing" className="footer-link">Pricing</Link></p>
            <p><a href="#" className="footer-link">Careers</a></p>

          </div>

          <div className="col-lg-3 mb-4">

            <h5 className="mb-3">Resources</h5>

            <p><a href="#" className="footer-link">Market Insights</a></p>
            <p><a href="#" className="footer-link">Investment Guides</a></p>
            <p><a href="#" className="footer-link">Help Center</a></p>
            <p><a href="#" className="footer-link">Blog</a></p>

          </div>

          <div className="col-lg-3 mb-4">

            <h5 className="mb-3">Contact</h5>

            <p style={{ color: "#cbd5e1" }}>
              support@growvest.com
            </p>

            <p style={{ color: "#cbd5e1" }}>
              Pune, Maharashtra, India
            </p>

            <p style={{ color: "#cbd5e1" }}>
              +91 98765 43210
            </p>

          </div>

        </div>

        <hr style={{ borderColor: "#334155" }} />

        <div className="text-center">
          <p
            style={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            Investing involves market risk. Please read all related documents
            carefully before investing. This project is created for educational
            and portfolio purposes.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        <div className="col-lg-6">

          <h1
            style={{
              color: "#08264A",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            {productName}
          </h1>

          <p
            style={{
              color: "#64748B",
              lineHeight: "1.8",
              fontSize: "1.05rem",
            }}
          >
            {productDesription}
          </p>

          <a
            href={learnMore}
            style={{
              textDecoration: "none",
              color: "#22C55E",
              fontWeight: "600",
            }}
          >
            Learn More
            <i
              className="fa fa-long-arrow-right ms-2"
              aria-hidden="true"
            ></i>
          </a>

        </div>

        <div className="col-lg-6 text-center">

          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{
              maxWidth: "90%",
            }}
          />

        </div>

      </div>

    </div>
  );
}

export default RightSection;
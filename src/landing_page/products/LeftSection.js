import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

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

          <div className="mt-4">

            <a
              href={tryDemo}
              style={{
                textDecoration: "none",
                color: "#22C55E",
                fontWeight: "600",
                marginRight: "30px",
              }}
            >
              Explore Feature
            </a>

            <a
              href={learnMore}
              style={{
                textDecoration: "none",
                color: "#08264A",
                fontWeight: "600",
              }}
            >
              Learn More
            </a>

          </div>

          <div className="mt-4">

            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{
                  height: "50px",
                }}
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                style={{
                  height: "50px",
                  marginLeft: "20px",
                }}
              />
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}

export default LeftSection;
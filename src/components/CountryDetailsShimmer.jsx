import React from "react";
import "./CountryDetailsShimmer.css";

export default function CountryDetailsShimmer() {
  return (
    <>
      <div className="country-details-container Detail-Shimmer">
        <div className="back-button"></div>
        <div className="country-details">
          <div className="img"></div>
          <div className="details-text-container">
            <div className="h1"></div>
            <div className="details-text">
              {Array.from({ length: 8 }).map((el , i) => {
                return <div key={i} className="p"></div>;
              })}
            </div>
            <div className="border-countries"></div>
          </div>
        </div>
      </div>
    </>
  );
}

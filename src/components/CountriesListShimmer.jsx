import React from "react";
import "./CountryListShimmer.css";
export default function CountriesListShimmer() {
  return (
    <>
      <div className="countries-container">
        {Array.from({ length: 12 }).map((div, i) => {
          return <div key={i} className="country-card shimmer-card">
            <div className="flag-container flag-C"></div>
            <div className="card-text">
              <h3 className="card-title card-T"></h3>
              <p className="Name-P"></p>
              <p className="Name-P"></p>
              <p className="Name-P"></p>
            </div>
          </div>;
        })}
      </div>
    </>
  );
}

import React from "react";
import "./loader.css";

export default function Loader() {
  return (
    <div className="loader">
      {[1, 1, 1, 1, 1].map((row, index) => (
        <div className="loader-row">
          <div className="loader-row-title"></div>
          <div className="loader-body">
            <div className="loader-body-inner">
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                <div className="loader-card"></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

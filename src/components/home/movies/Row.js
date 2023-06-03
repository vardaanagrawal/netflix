import React from "react";
import "./row.css";
import Card from "./Card";

export default function Row({ data, title, setPreviewMovie }) {
  return (
    <div className="row">
      <div className="row-head">{title}</div>
      <div
        className="row-body"
        style={{
          display: "flex",
          overflow: "scroll",
          padding: "15px 0px 40px",
        }}
      >
        <div
          className="row-body-inner"
          style={{ display: "flex", width: "max-content", gap: "10px" }}
        >
          {data.map((item, index) => (
            <Card
              movie={item}
              key={index}
              img={
                title === "Trending Movies" || title === "Netflix Originals"
                  ? 1
                  : 2
              }
              setPreviewMovie={setPreviewMovie}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

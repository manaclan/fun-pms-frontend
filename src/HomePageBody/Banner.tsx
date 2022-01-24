import { Carousel } from "antd";
import React from "react";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  background: "linear-gradient(-180deg,rgba(0,160,255,0),#0770cd)",
  textAlign: "center" as const,
};

export default function Banner() {
  return (
    <div style={{ background: "rgba(73,179,232,1.00)", height: "160px" }}>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>Advertise #1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Advertise #2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Advertise #3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Advertise #4</h3>
        </div>
      </Carousel>
    </div>
  );
}

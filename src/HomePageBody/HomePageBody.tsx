import React, { Component } from "react";
import { SearchBox } from "./SearchBox/SearchBox";
import Banner from "./Banner";
import { Calendar } from "antd";

export default class HomePageBody extends Component {
  render() {
    return (
      <div style={{ background: "#fff" }}>
        <Banner />
        <SearchBox />
        {/* <Calendar/> */}
        {/* <Calendar/> */}
      </div>
    );
  }
}

import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Col, Form, Input, List, Row } from "antd";
import general from "./SearchBox.module.scss";
import left from "./SearchBoxLeftPannel.module.scss";
import right from "./SearchBoxRightPannel.module.scss";
import Grid from "antd/lib/card/Grid";
import { HotelsTab } from "./RightTabs/HotelsTab";

export class SearchBox extends Component {
  state = {
    showModal: false,
    currentTab: "Hotels",
    expandRightPane: false,
  };

  showModal = (event: React.MouseEvent<any>) => {
    event.preventDefault();
    this.setState({ showModal: true });
  };

  hideModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      this.setState({ showModal: false });
    }
  };

  expandRightPane = (event: React.MouseEvent<any>) => {
    if (event.target === event.currentTarget) {
      this.setState({ expandRightPane: !this.state.expandRightPane });
    }
  };

  render() {
    // https://www.digitalocean.com/community/tutorials/react-modal-component
    const showHideClassName = this.state.showModal
      ? `${general["table-background-trigger"]} `
      : `${general["table-background-normal"]}`;
    const services = [
      { name: "Flights", render: <></> },
      { name: "Hotels", render: <HotelsTab /> },
    ];
    return (
      <div className={general["component-container"]}>
        <div className={showHideClassName} onClick={this.hideModal} />
        <Row justify="center">
          <Col span={12}>
            <Row
              onClick={this.showModal}
              className={
                this.state.showModal
                  ? general["table-selected"]
                  : general["table-deselected"]
              }
            >
              <Col span={6}>
                <List
                  style={{ height: "100%" }}
                  itemLayout="vertical"
                  dataSource={services}
                  renderItem={(item) =>
                    item.name === this.state.currentTab ? (
                      <List.Item
                        className={left["selected-tab"]}
                        onClick={() => {
                          this.setState({ currentTab: item.name });
                        }}
                      >
                        <List.Item.Meta
                          style={{ margin: 0 }}
                          title={
                            <div style={{ width: "100%", height: "100%" }}>
                              {item.name}
                            </div>
                          }
                        />
                      </List.Item>
                    ) : (
                      <List.Item
                        className={left["normal-tab"]}
                        onClick={() => {
                          this.setState({ currentTab: item.name });
                        }}
                      >
                        <List.Item.Meta
                          style={{ margin: 0 }}
                          title={
                            <div style={{ width: "100%", height: "100%" }}>
                              {item.name}
                            </div>
                          }
                        />
                      </List.Item>
                    )
                  }
                />
              </Col>
              <Col
                span={18}
                className={this.state.expandRightPane? right.expand : right.normal}
                onClick={this.expandRightPane}
              >
                {
                  services.filter(
                    (service) => service.name === this.state.currentTab
                  )[0].render
                }
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)

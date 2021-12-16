import { Button, Col, Dropdown, Menu, Row, Space, Table } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { Component } from "react";
import { connect } from "react-redux";
import CompanyButton from "./CompanyButton";
import { ExpandSiderTrigger } from "./ExpandSiderTrigger";
import {
  DownOutlined,
  PercentageOutlined,
  CommentOutlined,
  SaveOutlined,
  FormOutlined,
} from "@ant-design/icons";
import "flag-icon-css/css/flag-icons.min.css";
import "./CountryLanguageCurrencyButton/flag.css";
import { CountryLanguageCurrencyButton } from "./CountryLanguageCurrencyButton/CountryLanguageCurrencyButton";
import i18next from "i18next";
import { store } from "../app/store";
import { LoginButton } from "./LoginButton/LoginButton";

class AppHeader extends Component {
  //https://stackoverflow.com/questions/61633094/how-to-get-the-data-from-redux-store-using-class-components-in-react?rq=1
  state = {
    promoButtonText: "",
    partnerwithusButtonText: "",
    savedButtonText: "",
    mybookingButtonText: "",
    loginButtonText: "",
    registerButtonText: "",
  };

  componentDidMount() {
    const language: string =
      store.getState().headerCountryLanguageCurrencyButton.countryAndLanguage;
    switch (language) {
      case "Việt Nam (Tiếng Việt)":
        i18next.changeLanguage("vi", (err, t) => {
          if (err) console.log(err);
          this.setState({
            promoButtonText: t("header-promo-button-text", { ns: "header" }),
            partnerwithusButtonText: t("header-partner-with-us-button-text", {
              ns: "header",
            }),
            savedButtonText: t("header-saved-button-text", { ns: "header" }),
            mybookingButtonText: t("header-my-booking-button-text", {
              ns: "header",
            }),
            loginButtonText: t("header-login-button-text", { ns: "header" }),
            registerButtonText: t("header-register-button-text", {
              ns: "header",
            }),
          });
        });
    }

    store.subscribe(() => {
      const language: string =
        store.getState().headerCountryLanguageCurrencyButton.countryAndLanguage;
      switch (language) {
        case "Việt Nam (Tiếng Việt)":
          i18next.changeLanguage("vi", (err, t) => {
            if (err) console.log(err);
            this.setState({
              promoButtonText: t("header-promo-button-text", { ns: "header" }),
              partnerwithusButtonText: t("header-partner-with-us-button-text", {
                ns: "header",
              }),
              savedButtonText: t("header-saved-button-text", { ns: "header" }),
              mybookingButtonText: t("header-my-booking-button-text", {
                ns: "header",
              }),
              loginButtonText: t("header-login-button-text", { ns: "header" }),
              registerButtonText: t("header-register-button-text", {
                ns: "header",
              }),
            });
          });
          break;
        case "Viet Nam (English)":
          i18next.changeLanguage("en", (err, t) => {
            if (err) console.log(err);
            this.setState({
              promoButtonText: t("header-promo-button-text", { ns: "header" }),
              partnerwithusButtonText: t("header-partner-with-us-button-text", {
                ns: "header",
              }),
              savedButtonText: t("header-saved-button-text", { ns: "header" }),
              mybookingButtonText: t("header-my-booking-button-text", {
                ns: "header",
              }),
              loginButtonText: t("header-login-button-text", { ns: "header" }),
              registerButtonText: t("header-register-button-text", {
                ns: "header",
              }),
            });
          });
          break;
        case "Global":
          i18next.changeLanguage("en", (err, t) => {
            if (err) console.log(err);
            this.setState({
              promoButtonText: t("header-promo-button-text", { ns: "header" }),
              partnerwithusButtonText: t("header-partner-with-us-button-text", {
                ns: "header",
              }),
              savedButtonText: t("header-saved-button-text", { ns: "header" }),
              mybookingButtonText: t("header-my-booking-button-text", {
                ns: "header",
              }),
              loginButtonText: t("header-login-button-text", { ns: "header" }),
              registerButtonText: t("header-register-button-text", {
                ns: "header",
              }),
            });
          });
          break;
      }
    });
  }

  render() {
    return (
      <div>
        <Header
          className="site-page-header"
          title="Title"
          style={{ background: "#ffffff" }}
        >
          <Row>
            <Col flex={2}></Col>
            <Col>
              <Row justify={"space-around"}>
                <Col>
                  <ExpandSiderTrigger />
                </Col>
                <Col>
                  <div>
                    {React.createElement(CompanyButton, {
                      className: "trigger",
                      onClick: () => console.log("ahihi"),
                    })}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col flex={5}></Col>
            <Col flex="auto">
              <Row justify="space-around">
                <Col>
                  <Button icon={<PercentageOutlined />}>
                    {this.state.promoButtonText}
                  </Button>
                </Col>
                <Col>
                  <Button icon={<CommentOutlined />}>
                    {this.state.partnerwithusButtonText}
                  </Button>
                </Col>
                <Col>
                  <Button icon={<SaveOutlined />}>
                    {this.state.savedButtonText}
                  </Button>
                </Col>
                <Col>
                  <Button icon={<FormOutlined />}>
                    {this.state.mybookingButtonText}
                  </Button>
                </Col>
                <Col>
                  <CountryLanguageCurrencyButton />
                </Col>
                <Col>
                  <LoginButton text={this.state.loginButtonText} />
                </Col>
                <Col>
                  <Button
                    style={{
                      borderColor: "#fff",
                      borderRadius: "6px",
                      color: "#fff",
                      background: "rgba(1,148,243,1.00)",
                    }}
                  >
                    {this.state.registerButtonText}
                  </Button>
                </Col>
                <Col>
                  <Button />
                </Col>
                <Col>
                  <Button />
                </Col>
                <Col>
                  <Button />
                </Col>
                <Col>
                  <Button />
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </Col>
            <Col flex={1}></Col>
          </Row>
        </Header>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isSiderCollapsed: state.sider.isCollapsed,
});

export default connect(mapStateToProps)(AppHeader);

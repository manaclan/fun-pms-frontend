import { Button, Col, Dropdown, Row, Table } from "antd";
import React from "react";
import { connect } from "react-redux";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import "./StyleOverride.scss";
import {
  changeCountryAndLanguage,
  changeCurrency,
} from "./CountryLanguageCurrencyButtonSlice";

export const CountryLanguageCurrencyButton = () => {
  const dispatch = useAppDispatch();

  const countryAndLanguage = useAppSelector(
    (state) => state.headerCountryLanguageCurrencyButton.countryAndLanguage
  );
  const currency = useAppSelector(
    (state) => state.headerCountryLanguageCurrencyButton.currency
  );

  const CountryDataSource = [
    {
      key: "0",
      countryAndLanguage: "Việt Nam (Tiếng Việt)",
      countryLanguageCheck:
        countryAndLanguage === "Việt Nam (Tiếng Việt)"
          ? countryAndLanguage
          : "",
      currency: "VND",
      currencyCheck: currency === "VND" ? currency : "",
    },
    {
      key: "1",
      countryAndLanguage: "Viet Nam (English)",
      countryLanguageCheck:
        countryAndLanguage === "Viet Nam (English)" ? countryAndLanguage : "",
      currency: "USD",
      currencyCheck: currency === "USD" ? currency : "",
    },
    {
      key: "2",
      countryAndLanguage: "Global",
      countryLanguageCheck:
        countryAndLanguage === "Global" ? countryAndLanguage : "",
      currencyCheck: "",
    },
  ];
  const CountryColumn = [
    {
      title: "Country & Language",
      dataIndex: "countryAndLanguage",
      key: "CountryAndLanguage",
      render: (text: string) => {
        switch (text) {
          case "Global": {
            return (
              <Button
                type="text"
                className="button-overrided"
                style={{ width: "100%" }}
                onClick={() => {
                  dispatch(changeCountryAndLanguage(text));
                }}
              >
                <Row gutter={{ xs: 4, sm: 6, md: 8 }}>
                  <Col>
                    <span className="flag-icon flag-icon-un flag-icon-rounded"></span>
                  </Col>
                  <Col>{text}</Col>
                </Row>
              </Button>
            );
          }
          case "Việt Nam (Tiếng Việt)": {
            return (
              <Button
                type="text"
                className="button-overrided"
                style={{ width: "100%" }}
                onClick={() => {
                  dispatch(changeCountryAndLanguage(text));
                }}
              >
                <Row gutter={{ xs: 4, sm: 6, md: 8 }}>
                  <Col>
                    <span className="flag-icon flag-icon-vn flag-icon-rounded"></span>
                  </Col>
                  <Col>{text}</Col>
                </Row>
              </Button>
            );
          }
          case "Viet Nam (English)": {
            return (
              <Button
                type="text"
                className="button-overrided"
                style={{ width: "100%" }}
                onClick={() => {
                  dispatch(changeCountryAndLanguage(text));
                }}
              >
                <Row gutter={{ xs: 4, sm: 6, md: 8 }}>
                  <Col>
                    <span className="flag-icon flag-icon-vn flag-icon-rounded"></span>
                  </Col>
                  <Col>{text}</Col>
                </Row>
              </Button>
            );
          }
          default: {
            //statements;
            break;
          }
        }
      },
    },
    {
      title: "",
      dataIndex: "countryLanguageCheck",
      key: "CountryLanguageCheck",
      render: (text: string) => {
        switch (text) {
          case "Global": {
            return <CheckOutlined />;
          }
          case "Việt Nam (Tiếng Việt)": {
            return <CheckOutlined />;
          }
          case "Viet Nam (English)": {
            return <CheckOutlined />;
          }
          default: {
            return <></>;
          }
        }
      },
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "Currency",
      render: (text: string) => {
        switch (text) {
          case "VND": {
            return (
              <Button
                type="text"
                style={{ width: "100%" }}
                onClick={() => {
                  dispatch(changeCurrency(text));
                }}
              >
                <Row gutter={{ xs: 4, sm: 6, md: 8 }}>
                  <Col style={{ fontWeight: "bold" }}>{text}</Col>
                  <Col>Vietnamese Dong</Col>
                </Row>
              </Button>
            );
          }
          case "USD": {
            return (
              <Button
                type="text"
                style={{ width: "100%" }}
                onClick={() => {
                  dispatch(changeCurrency(text));
                }}
              >
                <Row gutter={{ xs: 4, sm: 6, md: 8 }}>
                  <Col style={{ fontWeight: "bold" }}>{text}</Col>
                  <Col>US Dollar</Col>
                </Row>
              </Button>
            );
          }
          default: {
            return <></>;
          }
        }
      },
    },
    {
      title: "",
      dataIndex: "currencyCheck",
      key: "CurrencyCheck",
      render: (text: string) => {
        switch (text) {
          case "VND": {
            return <CheckOutlined />;
          }
          case "USD": {
            return <CheckOutlined />;
          }
          default: {
            return <></>;
          }
        }
      },
    },
  ];
  const CountryTable = (
    <Table
      dataSource={CountryDataSource}
      columns={CountryColumn}
      bordered
      pagination={false}
    />
  );
  return (
    <div>
      <Dropdown arrow={true} overlay={CountryTable}>
        <Button>
          <Row gutter={{ xs: 4, sm: 6, md: 8 }}>
            <Col>
              {countryAndLanguage === "Global" ? (
                <span className="flag-icon flag-icon-un flag-icon-rounded"></span>
              ) : (
                <span className="flag-icon flag-icon-vn flag-icon-rounded"></span>
              )}
            </Col>
            <Col style={{ fontWeight: "bold" }}>{currency}</Col>
            <Col>
              <DownOutlined />
            </Col>
          </Row>
        </Button>
      </Dropdown>
    </div>
  );
};

// const mapStateToProps = (state) => ({
const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryLanguageCurrencyButton);

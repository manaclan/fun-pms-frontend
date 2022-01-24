import { Col, Row } from "antd";
import Link from "antd/lib/typography/Link";
import React from "react";
import { connect } from "react-redux";

type StateProps = {};

export const HotelsTab = (props: StateProps) => {
  return (
    <Col>
      <Row>
        <Link
          href="https://github.com/manaclan/fun-pms-frontend"
          target="_blank"
        >
          Recently Viewed Hotels
        </Link>
        <div></div>
      </Row>
    </Col>
  );
};

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(FlightsTab)
//

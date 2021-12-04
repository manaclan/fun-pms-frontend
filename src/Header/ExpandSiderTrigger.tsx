import { Button } from "antd";
import React from "react";
import { connect } from "react-redux";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { collapse } from "../Sider/SiderSlice";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

type AppProps = {
  message: string;
};

export const ExpandSiderTrigger = () => {
  const isSiderCollapsed = useAppSelector((state) => state.sider.isCollapsed);
  const dispatch = useAppDispatch();
  return (
    <div>
      {React.createElement(
        isSiderCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: "trigger",
          onClick: () => dispatch(collapse()),
        }
      )}
    </div>
  );
};

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(ExpandSiderButton)

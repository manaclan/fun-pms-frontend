import { Drawer, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import Sider from "antd/lib/layout/Sider";
import "antd/dist/antd.min.css";
import { collapse } from "../Sider/SiderSlice";

export const AppSider = () => {
  const isCollapsed = useAppSelector((state) => state.sider.isCollapsed);
  const dispatch = useAppDispatch();
  return (
    <Drawer
      title="Drawer"
      placement="left"
      closable={false}
      onClose={() => dispatch(collapse())}
      visible={!isCollapsed}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(AppSider);

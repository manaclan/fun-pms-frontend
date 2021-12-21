import { Menu } from "antd";
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

export const AppSider = () => {
  const isCollapsed = useAppSelector((state) => state.sider.isCollapsed);
  const dispatch = useAppDispatch();

  return (
    <Sider
      collapsible
      collapsed={isCollapsed}
      collapsedWidth={0}
      trigger={null}
    >
      <Menu defaultSelectedKeys={["1"]} theme="dark">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          Option 3
        </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(AppSider);

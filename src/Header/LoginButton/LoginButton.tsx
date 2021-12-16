import {
  Avatar,
  Button,
  Checkbox,
  Col,
  Dropdown,
  Form,
  Input,
  Row,
} from "antd";
import React, { ReactNode } from "react";
import { connect } from "react-redux";
import { UserOutlined, DownOutlined, LockOutlined } from "@ant-design/icons";
import "./StyleOverride.css";

export const LoginButton = (props: { text: string }) => {
  const LoginForm = (
    <>
    <Form 
    style={{"background":"white", "padding":"15px 10px 5px 10px"}}
    initialValues={{ remember: true }}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </>
  );

  return (
    <div>
      <Dropdown trigger={["click"]} arrow={true} overlay={LoginForm}>
        <Button>
          <Row gutter={{ xs: 4, sm: 6, md: 8 }} align="middle">
            <Col>
              <Row>
                <Avatar
                  size={{ xs: 18, sm: 18, md: 18, lg: 18, xl: 18 }}
                  icon={<UserOutlined />}
                />
              </Row>
            </Col>
            <Col>{props.text}</Col>
            <Col>
              <DownOutlined />
            </Col>
          </Row>
        </Button>
      </Dropdown>
    </div>
  );
};

const mapStateToProps = (state: {}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);

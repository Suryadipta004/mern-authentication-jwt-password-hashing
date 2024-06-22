import React from 'react';
import { Card, Typography, Form, Input, Button, Row, Col, Alert } from 'antd';
import { Link } from 'react-router-dom';
import loginImage from '../assets/medical.png';

const Login = () => {
  const [form] = Form.useForm();

  const handleLogin = async (values) => {
    console.log(values);
  };
  return (
    <Card className="form-container">
      <Row>
        <Col span={12}>
          <img src={loginImage} alt="Register" className="auth-img" />
        </Col>
        <Col span={12}>
          <Typography.Title level={3} className="title">
            Sign In
          </Typography.Title>
          <Typography.Text type="secondary" className="slogan">
            Unlock your world.
          </Typography.Text>
          <Form
            layout="vertical"
            form={form}
            onFinish={handleLogin}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
                {
                  type: 'email',
                  message: 'The input is not valid Email',
                },
              ]}
            >
              <Input size="large" placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input.Password size="large" placeholder="Enter your password" />
            </Form.Item>

            {/* {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )} */}

            <Form.Item>
              <Button
                // type={`${loading ? '' : 'primary'}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {/* {loading ? <Spin /> : 'Sign In'} */}
                Sign In
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/">
                <Button size="large" className="btn">
                  Create an Account
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default Login;

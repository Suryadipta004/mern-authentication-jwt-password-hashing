import React from 'react';
import { Card, Typography, Form, Input, Button, Row, Col, Alert, Spin } from 'antd';
import { Link } from 'react-router-dom';
import registerImage from '../assets/medical.png'; // Corrected import statement
import useSignup from '../hooks/useSignup';

const Register = () => {
  const [form] = Form.useForm();

  const { loading, error, registerUser } = useSignup();
  const handleRegister = (values) => {
    registerUser(values);
};

  return (
    <Card className="form-container">
      <Row>
        <Col span={12}>
          <Typography.Title level={3} className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" className="slogan">
            Join for exclusive access!
          </Typography.Text>
          <Form
            layout="vertical"
            form={form}
            onFinish={handleRegister}
            autoComplete="off"
          >
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your full name!',
                },
              ]}
            >
              <Input size="large" placeholder="Enter your full name" />
            </Form.Item>
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
            <Form.Item
              label="Confirm Password"
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: 'Please confirm your Password!',
                },
              ]}
            >
              <Input.Password size="large" placeholder="Re-enter your password" />
            </Form.Item>

              {error && (<Alert description = {error} 
              type='error'
              showIcon closable 
              className='alert'/>
              )}

            <Form.Item>
              <Button 
              type={`${loading ? '' : 'primary'}`}
              htmlType="submit" 
              size="large" 
              className="btn">
                {loading ? <Spin/> : 'Create Account'}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button size="large" className="btn">
                  Sign In
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <img src={registerImage} alt="Register" className="auth-img" />
        </Col>
      </Row>
    </Card>
  );
};

export default Register;

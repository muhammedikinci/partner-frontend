import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/customer/action';
import { Form, Input, Button, Row, Col, Alert } from 'antd';
import { Redirect } from 'react-router';

const Login = ({ customer, login }) => {
  const onFinish = (values) => {
    login(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return customer.token ? <Redirect to="/siparisler" /> : 
  (
    <Row type="flex"
    style={{ minHeight:'60vh' }}
    align="middle"
    justify="center"
    gutter={10}>
      <Col sm={1} md={8} ></Col>
      <Col sm={14} md={8} >
        <h1 style={{ fontSize: '30px', textAlign: 'center' }}>Tedarikçi Paneli</h1>
        {customer.message && <Alert message="Kullanıcı Adı veya Şifre yanlış!" type="error" style={{ marginBottom: '20px' }} />}
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Kullanıcı Adı"
            name="username"
            rules={[{ required: true, message: 'Kullanıcı Adı boş bırakılamaz!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Şifre"
            name="password"
            rules={[{ required: true, message: 'Şifre boş bırakılamaz!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" >
              Giriş
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col sm={1} md={8} ></Col>
    </Row>
  )
}

const mapStateToProps = (state) => {
  return {
    customer: state.customer.customer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (customer) => dispatch(login(customer))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
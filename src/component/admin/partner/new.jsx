import React from 'react';
import { connect } from 'react-redux';
import { setNewPartner } from '../../../redux/customer/action';
import { Form, Input, Button, Row, Col } from 'antd';
import { Redirect } from 'react-router';

const NewPartner = ({ result, setNewPartner }) => {
    const onFinish = (values) => {
        setNewPartner(values);
    }

    const onFinishFailed = (errorInfo) => {

    }

    return result === true ? <Redirect to="/admin/tedarikciler" /> : (
        <Row type="flex"
            style={{ minHeight:'60vh' }}
            align="middle"
            justify="center"
            gutter={10}>
            <Col sm={1} md={8} ></Col>
            <Col sm={14} md={8} >
                <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Kullanıcı Adı"
                        name="userName"
                        rules={[{ required: true, message: 'Kullanıcı Adı boş bırakılamaz!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Üretici Numarası"
                        name="partnerId"
                        rules={[{ required: true, message: 'Üretici Numarası boş bırakılamaz!' }]}
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
                            Kaydet
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col sm={1} md={8} ></Col>
        </Row>
    );
}

const mapStateToProps = (state) => {
    return {
        result: state.customer.newPartnerResult
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNewPartner: (partner) => dispatch(setNewPartner(partner))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPartner);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { resetState, setNewPartner } from '../../../redux/customer/action';
import { Form, Input, Button, Row, Col, Breadcrumb, message } from 'antd';
import { Redirect } from 'react-router';

const NewPartner = ({ result, setNewPartner, resetState, errorMessage }) => {
    const onFinish = (values) => {
        setNewPartner(values);
    }

    useEffect(() => {
        if (result) {
            resetState();
        }

        if (errorMessage) {
            message.warn(errorMessage.errorMessage);
            resetState();
        }
    }, [resetState, result, errorMessage]);

    return result === true ? <Redirect to="/admin/tedarikciler" /> : (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>
                <Breadcrumb.Item>Yeni Tedarikçi</Breadcrumb.Item>
            </Breadcrumb>
            <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                <Row gutter={10}>
                    <Col sm={14} md={8} >
                        <Form.Item
                            label="Ad Soyad"
                            name="name"
                            rules={[{ required: true, message: 'Ad Soyad boş bırakılamaz!' }]}
                        >
                            <Input />
                        </Form.Item>

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
                            label="Ticaret Sicil Unvanı"
                            name="tradeRegistryTitle"
                            rules={[{ required: true, message: 'Bu alan boş bırakılamaz!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Sicil No"
                            name="registrationNumber"
                            rules={[{ required: true, message: 'Bu alan boş bırakılamaz!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Vergi Numarası"
                            name="taxNumber"
                            rules={[{ required: true, message: 'Bu alan boş bırakılamaz!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={14} md={8} >
                        <Form.Item
                            label="Adres"
                            name="address"
                            rules={[{ required: true, message: 'Bu alan boş bırakılamaz!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Firma Sahibi"
                            name="ownerName"
                            rules={[{ required: true, message: 'Bu alan boş bırakılamaz!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Telefon"
                            name="mobileNumber"
                            rules={[{ required: true, message: 'Bu alan boş bırakılamaz!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Firma Telefonu"
                            name="companyPhoneNumber"
                            rules={[{ required: true, message: 'Bu alan boş bırakılamaz!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="E-Posta"
                            name="email"
                            rules={[{ required: true, message: 'Bu alan boş bırakılamaz!' }]}
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
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }} >
                                Kaydet
                            </Button>
                        </Form.Item>
                        </Col>
                </Row>
            </Form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        result: state.customer.newPartnerResult,
        errorMessage: state.customer.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNewPartner: (partner) => dispatch(setNewPartner(partner)),
        resetState: () => dispatch(resetState())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPartner);
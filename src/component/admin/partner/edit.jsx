import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { editPartner, getPartner, resetState } from '../../../redux/customer/action';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { Redirect } from 'react-router';

const NewPartner = ({ getPartner, result, editPartner, resetState, partner, match }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        getPartner(match.params.id)

        if (result) {
            message.success("Tedarikçi Güncellendi");
            resetState();
        }
    }, [getPartner, result, resetState, match, form]);

    const onFinish = (values) => {
        values.id = partner.id;

        if (values.password === "") {
            delete values.password;
        }

        editPartner(values);
    }

    return (
        <Row type="flex"
            style={{ minHeight:'60vh' }}
            align="middle"
            justify="center"
            gutter={10}>
            <Col sm={1} md={8} ></Col>
            <Col sm={14} md={8} >
                <Form
                name="basic"
                fields={[
                    {
                      name: ["name"],
                      value: partner.name,
                    },
                    {
                        name: ["userName"],
                        value: partner.userName,
                    },
                    {
                        name: ["partnerId"],
                        value: partner.partnerId,
                    },
                ]}
                onFinish={onFinish}
                >
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
                        label="Şifre"
                        name="password"
                    >
                        <Input.Password placeholder="Güncellemek için gir" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }} >
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
        result: state.customer.editPartnerResult,
        partner: state.customer.partner
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editPartner: (partner) => dispatch(editPartner(partner)),
        resetState: () => dispatch(resetState()),
        getPartner: (id) => dispatch(getPartner(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPartner);
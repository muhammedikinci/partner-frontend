import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { editPartner, getPartner, resetState } from '../../../redux/customer/action';
import { Form, Input, Button, Row, Col, message, Breadcrumb } from 'antd';

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
                        {
                            name: ["tradeRegistryTitle"],
                            value: partner.tradeRegistryTitle,
                        },
                        {
                            name: ["registrationNumber"],
                            value: partner.registrationNumber,
                        },
                        {
                            name: ["taxNumber"],
                            value: partner.taxNumber,
                        },
                        {
                            name: ["address"],
                            value: partner.address,
                        },
                        {
                            name: ["ownerName"],
                            value: partner.ownerName,
                        },
                        {
                            name: ["mobileNumber"],
                            value: partner.mobileNumber,
                        },
                        {
                            name: ["companyPhoneNumber"],
                            value: partner.companyPhoneNumber,
                        },
                        {
                            name: ["email"],
                            value: partner.email,
                        }
                    ]}
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
                        >
                            <Input.Password placeholder="Yeni şifre için girin" />
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
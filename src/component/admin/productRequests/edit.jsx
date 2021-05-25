import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { resetState, editProductRequest, getProductRequest } from '../../../redux/productRequests/action';
import { Form, Input, Button, Row, Col, Breadcrumb, Upload, message } from 'antd';
import { Redirect } from 'react-router';
import { UploadOutlined } from '@ant-design/icons';

const EditProductRequest = ({ editProductRequest, resetState, getProductRequest, match, request, editProductRequestResult, errorMessage }) => {
    const [images, setImages] = useState([]);

    const onFinish = (values) => {
        if (images.length === 0) {
            message.error("Ürün fotoğraflarını eklemek zorunludur.");
            return;
        }
        editProductRequest({
            id: request.id,
            productDetail: {
                name: values.productName,
                code: values.productCode,
                price: values.productPrice,
                sizes: [
                    {
                        width: values.productWidth,
                        height: values.productHeight
                    }
                ]
            },
            predictedStock: values.predictedStock,
            readyForShippingDate: values.readyForShippingDate,
            images: images.map((i) => {
                return { imageData: i.base64, description: "" }
            })
        });
    }

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
          onSuccess("ok");
        }, 0);
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    };

    const handleupload = (info) => {
        let fileList = [...info.fileList];
        fileList.forEach(function (file, index) {
            let reader = new FileReader();
            reader.onload = (e) => {
                file.base64 = e.target.result;
            };
            reader.readAsDataURL(file.originFileObj);
        });
        setImages(info.fileList);
    }

    useEffect(() => {
        if (!request.productDetail) {
            getProductRequest(match.params.id);
        }

        if (errorMessage) {
            message.error(errorMessage.errorMessage);
            resetState();
        }
    }, [resetState, editProductRequestResult, getProductRequest, match, request, errorMessage]);

    return editProductRequestResult === true ? <Redirect to="/urun-taleplerim" /> : (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>
                <Breadcrumb.Item>Yeni Ürün Talebi</Breadcrumb.Item>
            </Breadcrumb>
            <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    fields={[
                        {
                            name: ["productName"],
                            value: (request.productDetail || {}).name,
                        },
                        {
                            name: ["productHeight"],
                            value: (((request.productDetail || {}).sizes || [])[0] || {}).height,
                        },
                        {
                            name: ["productWidth"],
                            value: (((request.productDetail || {}).sizes || [])[0] || {}).width,
                        },
                        {
                            name: ["productCode"],
                            value: (request.productDetail || {}).code,
                        },
                        {
                            name: ["productPrice"],
                            value: (request.productDetail || {}).price,
                        },
                        {
                            name: ["predictedStock"],
                            value: request.predictedStock,
                        },
                        {
                            name: ["readyForShippingDate"],
                            value: request.readyForShippingDate,
                        }
                    ]}
                    >
                <Row gutter={10}>
                    <Col sm={14} md={8} >
                        <Form.Item
                            label="Ürün Adı"
                            name="productName"
                            rules={[{ required: true, message: 'Ürün Adı boş bırakılamaz!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Yükseklik (Boyutlar - Zorunlu Değil)"
                            name="productHeight"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Genişlik (Boyutlar- Zorunlu Değil)"
                            name="productWidth"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Ürün Kodu"
                            name="productCode"
                            rules={[{ required: true, message: 'Ürün Kodu boş bırakılamaz!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Fiyat"
                            name="productPrice"
                            rules={[{ required: true, message: 'Fiyat boş bırakılamaz!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col sm={14} md={8} >
                        <Form.Item
                            label="Başlangıç Stoğu (Bu alanı daha sonra ürünler kısmında değiştirebilirsiniz)"
                            name="predictedStock"
                            rules={[{ required: true, message: 'Başlangıç Stoğu boş bırakılamaz!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Taşınmaya hazır durumu (Örn: 7-8 Gün)"
                            name="readyForShippingDate"
                            rules={[{ required: true, message: 'Bu alan boş bırakılamaz!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="images"
                            label="Ürün Fotoğrafları"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            extra="Ürün fotoğrafları küçük(thumbnail) ya da düşük çözünürlüğe sahip olmamalı."
                        >
                            <Upload customRequest={dummyRequest} listType="picture" onChange={handleupload}>
                                <Button icon={<UploadOutlined />}>Yüklemek için tıklayın</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }} >
                                Talebi Düzenle
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
        request: state.productRequests.request,
        editProductRequestResult: state.productRequests.editProductRequestResult,
        errorMessage: state.productRequests.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editProductRequest: (productRequest) => dispatch(editProductRequest(productRequest)),
        getProductRequest: (id) => dispatch(getProductRequest(id)),
        resetState: () => dispatch(resetState())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProductRequest);
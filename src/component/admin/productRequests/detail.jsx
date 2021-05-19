import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { editProductRequest, getProductRequest, resetState } from '../../../redux/productRequests/action';
import { Row, Col, Breadcrumb, Image, Form, Input, Button, Switch, message  } from 'antd';

const AdminProductRequestDetail = ({ request, getProductRequest, loading, match, editProductRequestResult, editProductRequest, resetState }) => {
  const [fixNecessarySwitchBool, setFixNecessarySwitchBool] = useState(null);
  
  useEffect(() => {
    if (!request.id) {
      getProductRequest(match.params.id);
    }

    if (request.id && fixNecessarySwitchBool == null) {
      setFixNecessarySwitchBool(request.fixNecessary);
    }

    if (editProductRequestResult === false) {
      message.error("Düzenleme başarısız");
      resetState();
    }

    if (editProductRequestResult === true) {
      message.success("Talep başarıyla düzenlendi");
      resetState();
    }
  }, [getProductRequest, match, editProductRequestResult, resetState, request, fixNecessarySwitchBool, setFixNecessarySwitchBool]);

  const onFinish = (values) => {
    request.requestStatus.type = values.type;
    request.requestStatus.description = values.description;
    request.fixNecessary = fixNecessarySwitchBool;

    editProductRequest(request);
  }

  return loading ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>
        <Breadcrumb.Item>Ürün Talepleri</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Talep No - {request.id}</h1>
      <Row gutter={16}>
        <Col className="gutter-row" sm={24} md={12}>
          <p>Ürün Adı: {(request.productDetail || {}).name}</p>
          <p>Ürün Kodu: {(request.productDetail || {}).code}</p>
          <p>Fiyat: {(request.productDetail || {}).price}</p>
          <p>
            {((request.productDetail || {}).sizes || []).map((s) => {
              return (
                <span>Yükseklik: {s.height} | Genişlik: {s.width}</span>
              )
            })}
          </p>
        </Col>
        <Col className="gutter-row" sm={24} md={12}>
          <p style={{ display: 'flex' }}>Ürün Fotoğrafları: {(request.images || []).map((i => {
            return (
              <Image width={200} src={i.imageData} />
            )
          }))}</p>
          <p>Tahmini Kargoya Hazır Olma Süresi: {request.readyForShippingDate}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" sm={24} md={12}>
          <h2>Talep Durumu</h2>
          <p>Durum: {(request.requestStatus || {}).type}</p>
          <p>Açıklama: {(request.requestStatus || {}).description}</p>
          <h3>Düzenleme</h3>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            fields={[
              {
                  name: ["type"],
                  value: (request.requestStatus || {}).type,
              },
              {
                  name: ["description"],
                  value: (request.requestStatus || {}).description,
              },
              {
                name: ["fixNecessary"],
                value: request.fixNecessary
              }
            ]}
            >
              <Form.Item
                  label="Talep Durumu"
                  name="type"
                  rules={[{ required: true, message: 'Boş bırakılamaz!' }]}
              >
                  <Input />
              </Form.Item>

              <Form.Item
                  label="Durum Açıklaması"
                  name="description"
                  rules={[{ required: true, message: 'Boş bırakılamaz!' }]}
              >
                  <Input />
              </Form.Item>

              <Form.Item
                  label="Düzenleme Bekleniyor Mu? (Kapalı bırakılırsa tedarikçi talebini düzenleyemez)"
                  name="fixNecessary"
              >
                  <Switch checked={fixNecessarySwitchBool} onChange={(e) => { setFixNecessarySwitchBool(e); }} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">Değişiklikleri Uygula</Button>
              </Form.Item>
            </Form>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    request: state.productRequests.request,
    editProductRequestResult: state.productRequests.editProductRequestResult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductRequest: (id) => dispatch(getProductRequest(id, true)),
    editProductRequest: (request) => dispatch(editProductRequest(request, true)),
    resetState: () => dispatch(resetState())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProductRequestDetail);
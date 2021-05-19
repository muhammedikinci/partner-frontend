import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductRequest } from '../../../redux/productRequests/action';
import { Row, Col, Breadcrumb, Image, Button  } from 'antd';
import { Link } from "react-router-dom";

const ProductRequestsDetail = ({ request, getProductRequest, loading, match }) => {
  useEffect(() => {
    getProductRequest(match.params.id);
  }, [getProductRequest, match]);

  return loading ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>
        <Breadcrumb.Item>Siparişler</Breadcrumb.Item>
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
          {
            request.fixNecessary ? (
              <Button type="dashed"><Link to={"/urun-talebini-duzenle/" + request.id}>Talebi Düzenle</Link></Button>
            ) : (
              <p>Talep, düzenlemeye kapatılmış</p>
            )
          }
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    request: state.productRequests.request
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductRequest: (id) => dispatch(getProductRequest(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRequestsDetail);
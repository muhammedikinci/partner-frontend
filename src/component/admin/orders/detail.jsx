import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrderById, resetState } from '../../../redux/order/action';
import { Table, Row, Col, Card, List, Breadcrumb, message } from 'antd';
import { useHistory } from 'react-router-dom';

const { Column } = Table;

const OrderDetail = ({ order, loading, getOrderById, match, errorMessage, resetState }) => {
  const history = useHistory();

  useEffect(() => {
    if ((!order.orderId || order.id !== match.params.id) && !errorMessage) {
      getOrderById(match.params.id);
    }

    if (errorMessage) {
      message.error(errorMessage.errorMessage);
      resetState();
      history.push('/admin/siparisler');
    }
  }, [getOrderById, match, loading, order, errorMessage, resetState, history]);

  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>
        <Breadcrumb.Item>Siparişler</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Sipariş No - {order.orderId}</h1>
      <Row gutter={16}>
        <Col className="gutter-row" sm={24} md={12}>
          <Card title="Sipariş Detayları">
            <List>
              <List.Item>Sipariş Tarihi: {order.dateModified}</List.Item>
              <List.Item>Ödeme Tipi: {(order.paymentDetails || {}).method}</List.Item>
              <List.Item>Kargo Tipi: {(order.shippingDetails || {}).method}</List.Item>
            </List>
          </Card>
        </Col>
        <Col className="gutter-row" sm={24} md={12}>
          <Card title="Müşteri Bilgileri">
            <List>
              <List.Item>Ad Soyad: {order.firstName} {order.lastName}</List.Item>
              <List.Item>Telefon: {order.telephone}</List.Item>
              <List.Item>Email: {order.email}</List.Item>
            </List>
          </Card>
        </Col>
        
        <Col className="gutter-row" sm={24} md={12}>
          <Card title="Fatura Adresi">
            <List>
              <List.Item>Ad Soyad: {(order.paymentDetails || {}).firstName} {(order.paymentDetails || {}).lastName}</List.Item>
              <List.Item>Ülke: {(order.paymentDetails || {}).country}</List.Item>
              <List.Item>Şehir: {(order.paymentDetails || {}).zone}</List.Item>
              <List.Item>Tam Adres: {(order.paymentDetails || {}).fullAddress}</List.Item>
              <List.Item>Posta Kodu: {(order.paymentDetails || {}).postCode}</List.Item>
            </List>
          </Card>
        </Col>
        <Col className="gutter-row" sm={24} md={12}>
          <Card title="Teslimat Adresi">
            <List>
              <List.Item>Ad Soyad: {(order.shippingDetails || {}).firstName} {(order.shippingDetails || {}).lastName}</List.Item>
              <List.Item>Ülke: {(order.shippingDetails || {}).country}</List.Item>
              <List.Item>Şehir: {(order.shippingDetails || {}).zone}</List.Item>
              <List.Item>Tam Adres: {(order.shippingDetails || {}).fullAddress}</List.Item>
              <List.Item>Posta Kodu: {(order.shippingDetails || {}).postCode}</List.Item>
            </List>
          </Card>
        </Col>
        <Col className="gutter-row" sm={24} md={24}>
          <Table dataSource={order.products}>
            <Column title="Model" dataIndex="model" key="model" />
            <Column title="Ürün Adı" dataIndex="name" />
            <Column title="Adet" dataIndex="quantity" />
            <Column 
              title="Seçenek"
              dataIndex="option"
              render={(text, record) => (
                record.option.length > 0 && (record.option.map((o) => {
                  return o.name + ": " + o.value.split('-').slice(-1)[0]
                }))
              )}
            />
          </Table>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    order: state.order.selectedOrder,
    errorMessage: state.order.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrderById: (id) => dispatch(getOrderById(id)),
    resetState: () => dispatch(resetState())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetail);
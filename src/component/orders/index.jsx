import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllOrders } from '../../redux/order/action';
import { Table, Space, Breadcrumb } from 'antd';
import { Link } from "react-router-dom";

const { Column } = Table;

const OrdersIndex = ({ orders, loading, getAllOrders }) => {
  useEffect(() => {
    getAllOrders()
  }, [getAllOrders]);

  return loading ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>
        <Breadcrumb.Item>Siparişler</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Siparişler</h1>
      <Table dataSource={orders}>
        <Column title="Sipariş No" dataIndex="orderId" key="id" />
        <Column title="Müşteri No" dataIndex="customerId" key="id" />
        <Column title="Ad" dataIndex="firstName" key="id" />
        <Column title="Soyad" dataIndex="lastName" key="id" />
        <Column title="E-Posta" dataIndex="email" key="id" />
        <Column title="Tarih" dataIndex="dateModified" key="id" />
        <Column title="Durum" dataIndex="orderStatus" key="id" />
        <Column
          title="İşlem"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <Link to={'/siparisler/' + record.id}>Görüntüle</Link>
            </Space>
          )}
        />
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllOrders: () => dispatch(getAllOrders())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersIndex);
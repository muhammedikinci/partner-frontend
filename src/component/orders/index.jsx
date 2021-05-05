import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllOrders } from '../../redux/order/action';
import { Table, Space } from 'antd';
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
      <h1>Siparişler</h1>
      <Table dataSource={orders}>
        <Column title="Sipariş No" dataIndex="id" key="id" />
        <Column title="Durum" dataIndex="status" key="id" />
        <Column
          title="Action"
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
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllOrders } from '../../redux/order/action';
import { Table, Space } from 'antd';
import { Link } from "react-router-dom";

const { Column } = Table;

const OrderDetail = ({ order, loading, getOrderById }) => {
  useEffect(() => {
    getOrderById()
  }, [getOrderById]);

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
    order: state.order.selectedOrder
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrderById: () => dispatch(getOrderById())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetail);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../../../redux/product/action';
import { Table, Breadcrumb } from 'antd';

const { Column } = Table;

const ProductsIndex = ({ products, loading, getAllProducts }) => {
  useEffect(() => {
    getAllProducts()
  }, [getAllProducts]);

  return loading ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>
        <Breadcrumb.Item>Siparişler</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Siparişler</h1>
      <Table dataSource={products}>
        <Column title="No" dataIndex="productId" key="id" />
        <Column title="Tedarikçi" dataIndex="partnerId" key="id" />
        <Column title="Ürün Adı" dataIndex="name" key="id" />
        <Column title="Stok Sayısı" dataIndex="quantity" key="id" />
        <Column title="Güncellenme Tarihi" dataIndex="createdAt" key="id" />
        <Column title="Aktiflik Durumu" dataIndex="status" key="id" />
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsIndex);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMyProducts, resetState, setStock } from '../../../redux/product/action';
import { Table, Space, Breadcrumb, Button, Popover, InputNumber, message } from 'antd';

const { Column } = Table;

const ProductsIndex = ({ products, loading, getMyProducts, setStock, stockRequestResult, resetState }) => {
  useEffect(() => {
    if (products.length === 0) {
      getMyProducts()
    }

    if (stockRequestResult === true) {
      message.success("Stok güncellendi!");
      resetState();
    } else if (stockRequestResult === false) {
      message.success("Stock güncellenirken sorun oluştu!");
      resetState();
    }
  }, [getMyProducts, stockRequestResult, resetState, products]);

  const popoverContent = (productId, stockNumber) => {
    let stock = stockNumber;
    return (
      <div style={{ display: 'flex' }}>
        <InputNumber value={stock} onChange={(e) => { stock = e }} />
        <Button style={{ marginLeft: '10px' }} onClick={() => { setStock(productId, stock); }} >Onayla</Button>
      </div>
    )
  }

  return loading ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>
        <Breadcrumb.Item>Sistem Ürümleri</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Sistem Ürünleri</h1>
      <Table dataSource={products}>
        <Column title="ID" dataIndex="productId" key="id" />
        <Column title="Model" dataIndex="model" key="id" />
        <Column title="Ürün Adı" dataIndex="name" key="id" />
        <Column title="Stok Sayısı" dataIndex="quantity" key="id" />
        <Column title="Aktiflik Durumu" dataIndex="status" key="id" />
        <Column title="Güncellenme Tarihi" dataIndex="createdAt" key="id" />
        <Column
          title="İşlem"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <Popover content={() => { return popoverContent(record.id, record.quantity)}} title="Stok Güncelle" trigger="click">
                <Button>Stoğu Düzenle</Button>
              </Popover>
            </Space>
          )}
        />
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.product.my_products,
    stockRequestResult: state.product.stockRequestResult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMyProducts: () => dispatch(getMyProducts()),
    setStock: (productId, quantity) => dispatch(setStock(productId, quantity)),
    resetState: () => dispatch(resetState())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsIndex);
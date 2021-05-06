import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPartners } from '../../../redux/customer/action';
import { Table, Space, Breadcrumb } from 'antd';
import { Link } from "react-router-dom";

const { Column } = Table;

const PartnersIndex = ({ partners, loading, getAllPartners }) => {
  useEffect(() => {
    getAllPartners()
  }, [getAllPartners]);

  return loading ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>
        <Breadcrumb.Item>Tedarikçiler</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Tedarikçiler</h1>
      <Table dataSource={partners}>
        <Column title="No" dataIndex="partnerId" key="id" />
        <Column title="Ad Soyad" dataIndex="name" key="id" />
        <Column title="Kullanıcı Adı" dataIndex="userName" key="id" />
        <Column title="Rol" dataIndex="role" key="id" />
        <Column
          title="İşlem"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <Link to={'/admin/tedarikciler/' + record.id}>Düzenle</Link>
            </Space>
          )}
        />
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    partners: state.customer.partners
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPartners: () => dispatch(getAllPartners())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartnersIndex);
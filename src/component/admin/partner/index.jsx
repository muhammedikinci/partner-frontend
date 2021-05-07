import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPartners, deletePartner, resetState } from '../../../redux/customer/action';
import { Table, Breadcrumb, Popconfirm, message, Button } from 'antd';
import { Link } from "react-router-dom";

const { Column } = Table;

const PartnersIndex = ({ partners, getAllPartners, deletePartner, resetState, deleteResult }) => {
  useEffect(() => {
    getAllPartners()

    if (deleteResult) {
      message.success('Tedarikçi başarıyla silindi!');
      resetState();
    }
  }, [getAllPartners, deleteResult, resetState]);

  function confirmDelete(id) {
    deletePartner(id);
  }
  
  function cancelDelete(e) {
    message.error('Silme işlemi iptal edildi');
  }

  return (
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
          title=""
          key="id"
          render={(text, record) => (
            <Button type="primary"><Link to={'/admin/tedarikciler/' + record.id}>Düzenle</Link></Button>
          )}
        />
        <Column
          title=""
          key="id"
          render={(text, record) => (
            <Popconfirm
              title="Tedarikçiyi silmek istediğinizden emin misiniz?"
              onConfirm={() => confirmDelete(record.id)}
              onCancel={cancelDelete}
              okText="Evet"
              cancelText="Hayır"
            >
              <Button danger>Sil</Button>
            </Popconfirm>
          )}
        />
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    partners: state.customer.partners,
    deleteResult: state.customer.deleteResult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPartners: () => dispatch(getAllPartners()),
    deletePartner: (id) => dispatch(deletePartner(id)),
    resetState: () => dispatch(resetState())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartnersIndex);
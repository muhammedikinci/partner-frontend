import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllRequests } from '../../../redux/productRequests/action';
import { Table, Space, Breadcrumb } from 'antd';
import { Link } from "react-router-dom";

const { Column } = Table;

const AdminProductRequestsIndex = ({ requests, loading, getAllRequests }) => {
  const [statustypes, setStatusTypes] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);

  useEffect(() => {
    getAllRequests()

    if (requests) {
      let types = {}
      requests.forEach((r) => {
        types[r.requestStatus.type] = r.requestStatus.type;
        r["statusText"] = r.requestStatus.type;
        r["productName"] = r.productDetail.name;
      });

      setStatusTypes(Object.values(types).map((t) => { return { text: t, value: t } }));
    }
  }, [getAllRequests, setStatusTypes]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTableChange = (pagination, filters, sorter) => {
    let newData = [];

    if (filters.statusText) {
      for (let req of requests) {
        if (filters.statusText.indexOf(req.requestStatus.type) !== -1) {
          newData.push(req);
        }
      }
    } else {
      newData = requests;
    }

    setFilteredRequests(newData);
  };

  return loading ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>
        <Breadcrumb.Item>Ürün Talepleri</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Ürün Talepleri</h1>
      <Table dataSource={filteredRequests.length > 0 ? filteredRequests : requests} onChange={handleTableChange} >
        <Column title="Talep No" dataIndex="id" key="id" />
        <Column title="Tedarikçi No" dataIndex="partnerId" key="partnerId" />
        <Column title="Ürün Adı" dataIndex="productName" key="productName" />
        <Column 
          title="Talep Durumu" 
          dataIndex="statusText" 
          key="statusText"
          filters={statustypes}
        />
        <Column title="Talep Tarihi" dataIndex="createdAt" key="createdAt" />
        <Column
          title="İşlem"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <Link to={'/admin/urun-talepleri/' + record.id}>Görüntüle</Link>
            </Space>
          )}
        />
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    requests: state.productRequests.requests,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllRequests: () => dispatch(getAllRequests()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProductRequestsIndex);
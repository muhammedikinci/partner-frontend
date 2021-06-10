import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllMyRequests } from '../../../redux/productRequests/action';
import { Table, Space, Breadcrumb, Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Column } = Table;

const ProductRequestsIndex = ({ my_requests, loading, getAllMyRequests }) => {
  const [statustypes, setStatusTypes] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);

  useEffect(() => {
    getAllMyRequests()

    if (my_requests) {
      let types = {}
      my_requests.forEach((r) => {
        types[r.requestStatus.type] = r.requestStatus.type;
        r["statusText"] = r.requestStatus.type;
        r["productName"] = r.productDetail.name;
      });

      setStatusTypes(Object.values(types).map((t) => { return { text: t, value: t } }));
    }
  }, [getAllMyRequests]); // eslint-disable-line

  const handleTableChange = (pagination, filters, sorter) => {
    let newData = [];

    if (filters.statusText) {
      for (let req of my_requests) {
        if (filters.statusText.indexOf(req.requestStatus.type) !== -1) {
          newData.push(req);
        }
      }
    } else {
      newData = my_requests;
    }

    setFilteredRequests(newData);
  };

  return loading ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>
        <Breadcrumb.Item>Ürün Taleplerim</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Ürün Taleplerim</h1>
      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Button type="primary" icon={<PlusCircleOutlined style={{ fontSize: '15px' }} />}><Link style={{ color: 'white', marginLeft: '5px' }} to="/yeni-urun-talebi">Yeni Ürün Talebi</Link></Button>
      </div>
      <Table dataSource={filteredRequests.length > 0 ? filteredRequests : my_requests} onChange={handleTableChange} >
        <Column title="Talep No" dataIndex="id" key="id" />
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
              <Link to={'/urun-taleplerim/' + record.id}>Görüntüle</Link>
            </Space>
          )}
        />
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    my_requests: state.productRequests.my_requests,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMyRequests: () => dispatch(getAllMyRequests()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductRequestsIndex);
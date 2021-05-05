import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import { Provider } from 'react-redux';
import store from './store.js';

import ProductsIndex from "./component/products/index";
import OrdersIndex from "./component/orders/index";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Header className="header">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><Link to={`/siparisler`}>Siparişler</Link></Menu.Item>
              <Menu.Item key="2"><Link to={`/urunler`}>Ürünler</Link></Menu.Item>
              <Menu.Item key="3"><Link to={`/istatistikler`}>İstatistikler</Link></Menu.Item>
              <Menu.Item key="4"><Link to={`/raporlama`}>Raporlama</Link></Menu.Item>
              <Menu.Item key="5"><Link to={`/musteri`}>Müşteri Portföyü</Link></Menu.Item>
              <Menu.Item key="6">Çıkış</Menu.Item>
            </Menu>
          </Header>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>
                <Breadcrumb.Item>Siparişler</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ padding: '10px 0px', minHeight: 280 }}>
                <Route exact path="/siparisler" component={OrdersIndex} />
                <Route exact path="/urunler" component={ProductsIndex} />
              </Content>
            </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>FastnTech ©2021</Footer>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;

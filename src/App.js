import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Provider } from 'react-redux';
import store from './store.js';

import ProductsIndex from "./component/products/index";
import OrdersIndex from "./component/orders/index";
import OrderDetail from "./component/orders/detail";
import Login from "./component/customer/login";
import AuthRoute from "./component/partials/AuthRoute";
import Nav from "./component/partials/Nav";

const { Content, Footer } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Nav />
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Content style={{ padding: '0 50px' }}>
              <Content style={{ padding: '10px 0px', minHeight: 280 }}>
                <Switch>
                  <AuthRoute exact path="/siparisler" component={OrdersIndex} />
                  <AuthRoute exact path="/siparisler/:id" component={OrderDetail} />
                  <AuthRoute exact path="/urunler" component={ProductsIndex} />
                  <Route exact path="/giris" component={Login} />
                </Switch>
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

import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Provider } from 'react-redux';
import store from './store.js';

import ProductsIndex from "./component/admin/products/index";
import AdminOrdersIndex from "./component/admin/orders/index";
import AdminOrderDetail from "./component/admin/orders/detail";
import PartnerOrdersIndex from "./component/partner/orders/index";
import PartnerOrderDetail from "./component/partner/orders/detail";
import Login from "./component/admin/customer/login";
import AdminPartnersIndex from "./component/admin/partner/index";
import AdminNewPartner from "./component/admin/partner/new";
import AdminEditPartner from "./component/admin/partner/edit";
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
                  <AuthRoute exact path="/admin/siparisler" component={AdminOrdersIndex} />
                  <AuthRoute exact path="/admin/siparisler/:id" component={AdminOrderDetail} />
                  <AuthRoute exact path="/siparisler" component={PartnerOrdersIndex} />
                  <AuthRoute exact path="/siparisler/:id" component={PartnerOrderDetail} />
                  <AuthRoute exact path="/admin/urunler" component={ProductsIndex} />
                  <AuthRoute exact path="/admin/tedarikciler" component={AdminPartnersIndex} />
                  <AuthRoute exact path="/admin/tedarikciler/:id" component={AdminEditPartner} />
                  <AuthRoute exact path="/admin/yeni-tedarikci" component={AdminNewPartner} />
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

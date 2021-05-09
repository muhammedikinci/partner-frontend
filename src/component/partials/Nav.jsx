import { removeToken, getToken } from "../../helper/token";
import { isAdmin } from "../../helper/role";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Nav = ({ customer }) => {
    return isAdmin() ? ((customer.token || getToken()) ? (
        <Header className="header">
            <div style={{float: 'left', color: 'white', marginRight: '20px'}}>Admin</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to={`/admin/siparisler`}>Siparişler</Link></Menu.Item>
                <Menu.Item key="2"><Link to={`/admin/urunler`}>Ürünler</Link></Menu.Item>
                <Menu.Item key="4"><Link to={`/admin/tedarikciler`}>Tedarikçiler</Link></Menu.Item>
                <Menu.Item key="5"><Link to={`/admin/yeni-tedarikci`}>Yeni Tedarikçi</Link></Menu.Item>
                <Menu.Item key="6" onClick={() => { removeToken(); window.location.href = '/giris' }} >Çıkış</Menu.Item>
            </Menu>
        </Header>
    ) : null) : ((customer.token || getToken()) ? (
        <Header className="header">
            <div style={{float: 'left', color: 'white', marginRight: '20px'}}>{customer.userName}</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to={`/siparisler`}>Siparişler</Link></Menu.Item>
                <Menu.Item key="2"><Link to={`/urunler`}>Ürünler</Link></Menu.Item>
                <Menu.Item key="3"><Link to={`/profil`}>Profil</Link></Menu.Item>
                <Menu.Item key="6" onClick={() => { removeToken(); window.location.href = '/giris' }} >Çıkış</Menu.Item>
            </Menu>
        </Header>
    ) : null);
}

const mapStateToProps = (state) => {
    return {
        customer: state.customer.customer
    }
}

export default connect(mapStateToProps, {})(Nav);
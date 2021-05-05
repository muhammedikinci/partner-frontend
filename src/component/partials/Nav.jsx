import { removeToken, getToken } from "../../helper/token";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Nav = ({ customer }) => {
    return (customer.token || getToken()) ? (
        <Header className="header">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to={`/siparisler`}>Siparişler</Link></Menu.Item>
                <Menu.Item key="2"><Link to={`/urunler`}>Ürünler</Link></Menu.Item>
                <Menu.Item key="3"><Link to={`/istatistikler`}>İstatistikler</Link></Menu.Item>
                <Menu.Item key="4"><Link to={`/raporlama`}>Raporlama</Link></Menu.Item>
                <Menu.Item key="5"><Link to={`/musteri`}>Müşteri Portföyü</Link></Menu.Item>
                <Menu.Item key="6" onClick={() => { removeToken(); window.location.href = '/giris' }} >Çıkış</Menu.Item>
            </Menu>
        </Header>
    ) : (<div></div>);
}

const mapStateToProps = (state) => {
    return {
        customer: state.customer.customer
    }
}

export default connect(mapStateToProps, {})(Nav);
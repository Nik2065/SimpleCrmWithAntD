import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authenticationService } from "./_Services/authentication.service";

import 'antd/dist/antd.css';

import { 
    Layout, Menu, 
    Breadcrumb, 
    Row, Col, Dropdown, Button, Badge, Tooltip, 
} from 'antd';


import Icon, {
    //HomeOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ContainerOutlined,
    InboxOutlined,
    ProjectOutlined,
    RocketOutlined,
    GlobalOutlined,
    ReadOutlined,
    //SettingFilled,
    CrownOutlined,
    UserOutlined, 
    DownOutlined, 
    BellOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
const Year = new Date().getFullYear();

export default class AppLayout extends React.Component {

  state = {
    currentUser: authenticationService.currentUserValue,
  }
  


    render() {
        return (
            <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" style={{textAlign:"right"}} >
                <Menu.Item key="1">
                    <Link to='/landing'>О программе</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to='/login'>Войти</Link>
                </Menu.Item>

                {
                (this.state.currentUser!=null) ?
                  <React.Fragment>
                  <Menu.Item>&nbsp;|&nbsp;</Menu.Item>
                  <Menu.Item key="3">Заказы</Menu.Item>
                  <Menu.Item key="4">nav 2</Menu.Item>
                  </React.Fragment>
                : ""
                }
              </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 580 }}>
              
              {this.props.children}

              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>2020 SimpleCrm</Footer>
          </Layout>
        );
    }
}
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//import { authenticationService } from "./_Services/authentication.service";

import 'antd/dist/antd.css';

import { 
    Layout, Menu, 
    Breadcrumb, 
    Row, Col, Dropdown, Button, Badge, Tooltip
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

//import GMIcon from './_Components/Icons/GMIcon.jsx'
//import BookIcon from './_Components/Icons/BookIcon.jsx'
//import DeliveryIcon from './_Components/Icons/DeliveryIcon.jsx'
//import TransportationIcon from './_Components/Icons/TransportationIcon.jsx'
//import PickupIcon from './_Components/Icons/PickupIcon.jsx'
//import OperationIcon from './_Components/Icons/OperationIcon.jsx'


const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
const Year = new Date().getFullYear();

export default class AppLayout extends React.Component {




    render() {



        return (
            <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" style={{textAlign:"right"}} >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">
                    <Link to='/landing'>Лендинг</Link>
                </Menu.Item>
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
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        );
    }
}
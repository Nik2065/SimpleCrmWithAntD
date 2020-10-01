import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authenticationService } from "./_Services/authentication.service";

import 'antd/dist/antd.css';

import { 
    Layout, Menu, 
    Breadcrumb, 
    Row, Col, Dropdown, Button, Badge, Tooltip, Carousel, Card, Statistic
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
    PlusCircleOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined, LikeOutlined

} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
const Year = new Date().getFullYear();






export default class Landing extends React.Component {

  state = {
    currentUser: authenticationService.currentUserValue,
  }
  


    render() {

      const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

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

              </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, minHeight: 580 }}>
              
              <Carousel autoplay>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
              
            <Row>
            <Col flex={3}>
              <Card>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col flex={3}>
              <Card>
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col flex={3}>
                <Card>
                  <Statistic title="Unmerged" value={93} suffix="/ 100" />
                </Card>
            </Col>
            <Col flex={3}>
                <Card>
                  <Statistic title="Unmerged" value={93} prefix={<LikeOutlined />} suffix="/ 100" />
                </Card>
            </Col>
          </Row>

          <Row style={{paddingTop:"20px"}}>
            <Col flex="20">
            <Card title="Card title" bordered={true} >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida felis nec libero efficitur congue. Fusce facilisis condimentum porta. Vivamus a urna quis orci auctor viverra. Maecenas viverra efficitur purus quis aliquam. Nunc porttitor purus a eros dignissim sollicitudin. Nunc in arcu et magna dignissim egestas. Sed at nulla quis sapien malesuada laoreet. Quisque dignissim metus tristique quam luctus, et laoreet eros mollis. Praesent luctus enim odio, ac eleifend nisi vehicula quis. Ut rutrum justo eu nisl fringilla porta. Duis quam nibh, dictum quis viverra suscipit, tristique sit amet turpis. Nullam accumsan interdum erat id tincidunt. Aliquam dignissim nunc et eros euismod faucibus. Curabitur bibendum, felis vitae euismod vestibulum, augue mi suscipit lacus, ac gravida velit nunc at ligula. Aliquam sollicitudin convallis neque, vitae congue tellus dignissim sed. Nulla luctus mi est, euismod faucibus urna posuere quis.</p>
              <p>Etiam molestie rutrum ex. Cras odio magna, condimentum ut leo sed, dapibus sollicitudin erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum justo augue. Pellentesque leo risus, consequat sed lacus ut, dignissim dictum odio. Nullam nec erat ullamcorper, pharetra arcu vitae, ultricies neque. Donec neque dui, eleifend ut aliquam nec, lobortis scelerisque augue. Quisque pulvinar augue urna. Vestibulum viverra mi ac dolor venenatis, eu tempor metus lobortis. Pellentesque non diam diam. Integer in auctor neque. Pellentesque euismod est ac ipsum tempus tincidunt. Nullam dictum augue eu augue ornare, eu tincidunt nisi bibendum. Nam aliquet placerat eros at dapibus.</p>
            </Card>
            </Col>

            <Col flex="4">
            <Card  bordered={true} >
              Картинка
            </Card>
            </Col>
          </Row>

            </Content>
            <Footer style={{ textAlign: 'center' }}>2020 SimpleCrm</Footer>
          </Layout>
        );
    }
}
import React from 'react';
import { Form, Input, Button, Checkbox, Layout, Row, Col } from 'antd';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


class MyForm extends React.Component {

  render(){
    return(
      
      <Form 
      style={{minHeight:"150px", border:"1px #ccc solid", padding:"10px"}}
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      //onFinish={onFinish}
      //onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>);

}
}


export default class Login extends React.Component {



    render() {
       



          
    return (
<Layout>


  <Layout.Content>
    <div style={{minHeight:"100px"}}></div>

<Row>
  <Col xs={2} sm={4} md={6} lg={8} xl={8}></Col>
  <Col xs={20} sm={16} md={12} lg={8} xl={8}>
  
  <MyForm/>
  <div style={{minHeight:"400px", }}>

  </div>
  </Col>
  <Col xs={2} sm={4} md={6} lg={8} xl={8}></Col>

</Row>


    </Layout.Content>

    <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
    </Layout>
    );

    }
}
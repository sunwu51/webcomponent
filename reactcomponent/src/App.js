import React, { Component, Children } from 'react';
import ListDemo from './router/List'
import logo from './logo.svg';
import _ from 'lodash';
import './App.css';
import {Link,BrowserRouter,Switch, Route} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

function A(){
  return <h1>A</h1>
}
function B(){
  return <h1>B</h1>
}

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>

        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          
          <Menu theme="dark" defaultSelectedKeys={['list']} mode="inline">
            <Menu.Item key="list">
               <Link to='/list'><Icon type="pie-chart" />
             <span>List</span></Link>
            </Menu.Item>
            <Menu.Item key="a">
              <Link to='/a'><Icon type="desktop" />
              <span>aaa</span></Link>
            </Menu.Item>
            <Menu.Item key="b">
            <Link to='/b'><Icon type="file" />
              <span>bbb</span></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>list</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {this.props.children}
            </div>
          </Content>  
          <Footer style={{ textAlign: 'center' }}>
            这里是footer
          </Footer>
        </Layout>
      </Layout>
    );
  }
}




class App extends Component {
  
  render() {

    return (
      <BrowserRouter>
        <SiderDemo>
          <Switch>
          <Route  path="/list" component={ListDemo} on/>
          <Route  path="/a" component={A}/> 
          <Route  path="/b" component={B}/>
          </Switch> 
        </SiderDemo>  
      </BrowserRouter>
    
    );
  }
}

export default App;

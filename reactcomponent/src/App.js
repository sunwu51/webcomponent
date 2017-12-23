import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,HashRouter,BrowserRouter,Switch, Route} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import asyncComponent from './AsyncComponent';
import _ from 'lodash';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

// const List = () => (
//   <Bundle load={ListDemo}>
//       {(ListDemo) => <ListDemo/>}
//   </Bundle>
// )

// const At = () => (
//   <Bundle load={A}>
//       {(A) => <A/>}
//   </Bundle>
// )
// const Bt = () => (
//   <Bundle load={B}>
//       {(B) => <B/>}
//   </Bundle>
// )

const List=asyncComponent(()=>import(/* webpackChunkName: "list" */"./router/List"))
const At=asyncComponent(()=>import(/* webpackChunkName: "a" */"./router/A"))
const Bt=asyncComponent(()=>import(/* webpackChunkName: "b" */"./router/B"))
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    let selected=this.props.location.pathname.substring(1)
    if(selected==="")selected="list"
    return (
      <Layout style={{ minHeight: '100vh' }}>

        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          
          <Menu theme="dark" defaultSelectedKeys={[selected]} mode="inline">
            <Menu.Item key="list">
               <Link to='/list'><Icon type="pie-chart" />
             <span>list</span></Link>
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
          <Header style={{ background: '#fff', padding: 0 }}><center><h1>这里放置标题之类的东西</h1></center></Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{this.props.url}</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Route exact path="/list" component={List}/>
                <Route exact path="/a" component={At}/>
                <Route exact path="/b" component={Bt}/>
                <Route exact path="/" component={List}/>
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
      <HashRouter>
          <Switch>
            <Route  path="/" component={SiderDemo}/>
          </Switch> 
      </HashRouter>

    );
  }
}

export default App;

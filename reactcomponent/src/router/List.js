import React, { Component } from 'react';
import List from '../component/List/Index'
import _ from 'lodash';


const columns=[
  {key:'userid',isId:true,editable:false,},
  {key:'username'},
  {key:'password'},
]
const dataSource=[
  {userid:1,username: "小张",password:"123"},
  {userid:2,username: "小李",password:"456"},
  {userid:3,username: "小李",password:"456"},
  {userid:4,username: "小李",password:"456"},
]

class ListDemo extends Component {
  state={dataSource}
  id=4;
  handleAdd(record){
    console.log("添加条目",record)
    let that=this;
    record.userid=(++this.id);//模拟数据库自增
    dataSource.push(record);
    setTimeout(()=>{that.setState({dataSource})},1000); 
  }
  handleDelete(record){
    console.log("删除条目",record)
    let that=this
    setTimeout(()=>{
      _.remove(dataSource,it=>it.userid===record.userid)
      that.setState({dataSource})
    },1000);
  }
  handleUpdate(record){
    console.log("更新条目",record)
    let that=this
    setTimeout(()=>{
      dataSource[_.findKey(dataSource,it=>it.userid===record.userid)]=record
      that.setState({dataSource})
    },1000);
  }
  render() {
    return (
      <List  columns={columns} dataSource={this.state.dataSource}
        onAdd={this.handleAdd.bind(this)}
        onDelete={this.handleDelete.bind(this)}
        onUpdate={this.handleUpdate.bind(this)}
      /> 
    );
  }
}

export default ListDemo;

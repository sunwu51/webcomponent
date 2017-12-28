<template>
    <v-list 
    :columns="columns" 
    :data-source="dataSource" 
    :onAdd="handleAdd"
    :onUpdate="handleUpdate"
    :onDelete="handleDelete" />
</template>

  <script>
    import Vue from 'vue'
    import _ from 'lodash'
    import vList from './Index'
    
    export default {
      components:{ vList },
      data () {
          return {
             initId:5, 
             columns: [
                {key:'userid',title:"用户ID",editable:false,},
                {key:'username',type:'number'},
                {key:'password',selection:['123','456']},
            ],
             dataSource: [
                {userid:1,username: "小张",password:"123"},
                {userid:2,username: "小李",password:"456"},
                {userid:3,username: "小李",password:"456"},
                {userid:4,username: "小李",password:"456"},
            ]
          }
      },
      methods:{
          handleAdd(record){
              record.userid=this.initId++;
              this.dataSource.push(record)
          },
          handleDelete(record){
              _.remove(this.dataSource,it=>it.userid===record.userid)
              this.dataSource=Object.assign([],this.dataSource)
          },
          handleUpdate(record){
             Vue.set(this.dataSource,_.findKey(this.dataSource,it=>it.userid===record.userid), record)
          }

      }

    }
  </script>
  <style>
      table{
          text-align: left;
          }
  </style>
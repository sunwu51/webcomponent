# React + Ant Design
# 组件介绍
## 1 List
```
Props:
  columns: PropTypes.array.isRequired
  dataSource: PropTypes.array.isRequired
  onAdd: PropTypes.func.isRequired
  onDelete: PropTypes.func.isRequired
  onUpdate: PropTypes.func.isRequired
```
colums是列的数组，数组的每个元素是Object例如
```json
  {key:'userid',title:'用户ID',isId:true,editable:false}
```
其中只有`key`是必须的，它代表dataSource中的数据的键。  

`title`非必须，表格表头显示的文字，如果不传入，默认赋值为`key`。  

`isId`非必须，因为react中要求数组需指定key，如果不指定一个Id可能有警告，最好指定一个字段为id，不要指定多个字段为id，可能会出现不可预料的错误，默认false。  

`editable`非必须，是否可修改，例如id字段可能是不允许修改的，就将其设置为false，编辑页面就不会有这个字段的编辑框。默认为true。

dataSource是数据部分，对象的属性需要和columns中的key保持一致，columns中的key可以是部分key，例如id字段不想显示，dataSource中有，而columns中不写这个key即可。

onAdd onDelete onUpdate三个函数都需要设置一个参数，该参数为操作的那条数据，例如onAdd中就是添加的对象信息，如果有editable为false的字段这里就不会有。onDelete的参数则是想要删除的那条记录。onUpdate是更新后的那条记录，所以这里需要有专门的id来进行唯一标识。
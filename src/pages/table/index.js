
import React, { Component } from 'react'
import {Table,Popover,Icon,} from 'antd'
import styles from './index.css';

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const edit = (record,text) => {
  console.log(record,text);
}
class TableShow extends Component {
  constructor (props){
    super(props)
  }
  
  render (){
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key:'name'
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key:'age'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render:(val,record,index)=>{
          return(
               <div>
                <Popover
                    content={
                     <p>{record.address}</p>
                    }
                >
                {record.address}
                </Popover>
              </div>
           )              
          }
      },
      {
        title: 'Action',
        render: (record,text) => {
          return(<a onClick={() => edit(record,text)}>delete</a>)
        }
      },
    ];

    const expandedRowRender = (record) => {
      console.log(record);
      const data1=[{
        key:9,
        name:'heliang',
        age:18,
        address:'东方明珠'
      }]
      return(
        <Table rowKey="name" columns={columns} dataSource={data1} showHeader={false} pagination={false} />
      )
    }
    return(
      <Table rowKey="name" columns={columns} dataSource={data} expandedRowRender={expandedRowRender} />
    )
  }
}

export default TableShow
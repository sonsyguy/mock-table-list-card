
import React, { Component } from 'react'
import {Table,Popover,Icon,Modal,Form,Input} from 'antd'
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


class TableShow extends Component {
  state = {
    visible:false,
    editData:{},
    formLayout: 'horizontal',
  }

  edit = (record,text) => {
    let {editData} = this.state;
    editData = record;
    this.setState({
      visible: true,
      editData,
    },);
    this.props.form.setFieldsValue({
      username: editData.name,
    });
    this.props.form.setFieldsValue({
      password: editData.address,
    });
    console.log(editData);
  }

  handleSubmit = e => {
    console.log(e);
    this.setState({
      visible: false,
      editData:{}
    });
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      editData:{}
    });
  };
  
  render (){
    const { getFieldDecorator } = this.props.form;
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : null;
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
          return(<a onClick={() => this.edit(record,text)}>delete</a>)
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
      <div>
        <Table rowKey="name" columns={columns} dataSource={data} expandedRowRender={expandedRowRender} />
        <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleSubmit}
            onCancel={this.handleCancel}
          >
          <p>{this.state.editData.age}</p>
          <p>{this.state.editData.name}</p>
          <p>{this.state.editData.address}</p>
          <Form className="login-form"  layout={formLayout}>
            <Form.Item label="username" {...formItemLayout}>
              {getFieldDecorator('username', {
                rules: [{message: 'Please input your username!' }],
              })(
                <Input
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item label="password" {...formItemLayout}>
              {getFieldDecorator('password', {
                rules: [{message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Form.create({ name: 'editTable' })(TableShow)
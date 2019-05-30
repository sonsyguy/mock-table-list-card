
import React,{Component} from 'react';
import { Form, InputNumber, Input, DatePicker, Button, Select } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;

const data = [
  {
    'field': 'jobid',
    'text': '工号',
    'errorMessage': '请输入工号',
    'required': true,
    'type': 'int',
    'value': 100
  },{
    'field': 'date',
    'text': '日期',
    'errorMessage': '请输入日期',
    'required': false,
    'type': 'date',
    'value': '2017-10-20'
  },{
    'field': 'username',
    'text': '用户名',
    'errorMessage': '请输入用户名',
    'required': true,
    'type': 'char',
    'value': 'hello world'
  },{
    'field': 'customer',
    'text': '客户',
    'errorMessage': '请输入客户',
    'required': true,
    'type': 'select',
    'value': '中兴',
    'options': ['贝尔', '中兴', '烽火']
  }
]



class LoadFrom extends Component {

  switchItem(item) {
    const type = item.type;
    switch (type) {
      case 'int':
        return (
 
            <label  key={item.field}>{item.text}:
              <InputNumber defaultValue={item.value} style={{ width: '50%' }} />
            </label>      
        );
        break;
      case 'char':
        return (
            <label key={item.field} >{item.text}:
              <Input defaultValue={item.value} style={{ width: '50%' }} />
            </label>
        );
        break;
      case 'date':
        return (

            <label key={item.field}>{item.text}:
            <DatePicker defaultValue={item.value} style={{ width: '50%' }} />
            </label>

        )
        break;
      case 'select':
        return (

            <label key={item.field}>{item.text}:
            <Select defaultValue={item.value} style={{ width: '50%' }} >
          {
            item.options.map((option, index) => {
              return (<Option key={index} value={option}>{option}</Option>)
            })
          }
          </Select>
            </label>

          
          
        )
      default:
        return <Input key={item.field} style={{ width: '50%' }} />;
        break;
    }
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        {
          data.map((item, index) => {
            console.log(this.props);
            // type 为 date 日期格式需要强制转化为 moment 格式
            item.value = item.type == 'date' ? moment(item.value, 'YYYY-MM-DD') : item.value;
            return (
              this.switchItem(item)
            )
          })
        }
      </div>
    )
  }
}

export default Form.create()(LoadFrom)
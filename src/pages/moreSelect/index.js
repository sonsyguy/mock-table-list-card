
import React, {Component,Fragment} from 'react'
import {Select,Icon, AutoComplete} from 'antd'

const { Option } = Select;

class MoreSelect extends Component{
  render() {
    return(
        <div>
<br />
        <br />
        <br />
        <br />
        <Select
          mode="multiple"
          style={{minWidth:140}}
          showArrow={true}
        >
          <Option value='1'>1</Option>
          <Option value='2'>2</Option>
          <Option value='3'>3</Option>
          <Option value='4'>4</Option>
        </Select>
        </div>

        
    )
  }
}

export default MoreSelect
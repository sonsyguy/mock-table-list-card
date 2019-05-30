
import React,{Component} from 'react'

import {Row,Col,Divider} from 'antd'

class FormDemo extends Component{
  state ={
    name:'',
    age:'',
    address:'',
    hobby:'',
    password:'',
    check: false
  }
  handleChange =(event) =>{
    const target = event.target;
    let o = {};
    o[target.name] = target.value;
    this.setState(o);
    console.log(target.value,target.name)
  }

  handleCheckChange = (event) =>{
    this.setState({
      check:event.target.checked
    })
    console.log(this.state.check);
  }
  render(){
    return(
      <div>
        <Row style={{marginTop:200}}>
          <Col span={10} offset={2} style={{height:200,borderRight:'1px solid green'}}>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              </label>
              <label>
                Age:
                <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
              </label>
              <label>
                Address:
                <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
              </label>
              <label>
                Hobby:
                <input type="text" name="hobby" value={this.state.hobby} onChange={this.handleChange} />
              </label>
              <label>
                Password:
                <input type="password" name="password" value={this.state.check ? 0 : 1} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
            
          </Col>
          
          <Col span={8} offset={2} style={{height:200,border:'1px solid blue'}}>
            <p>Name:<span>{this.state.name}</span></p>
            <p>Age:<span>{this.state.age}</span></p>
            <p>Address:<span>{this.state.address}</span></p>
            <p>Hobby:<span>{this.state.hobby}</span></p>
            <p>Password:<span>{this.state.password}</span></p>
          </Col>
          <input type="checkbox" value = {this.state.check} onChange={this.handleCheckChange}/>
        </Row>
      </div>
    )
  }
}

export default FormDemo
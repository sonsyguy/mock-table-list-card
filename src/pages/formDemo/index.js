
import React,{Component} from 'react';
import {Card, Row, Col,List} from 'antd';
import {connect} from 'dva';
import styles from './index.css';

class FormDemo extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const {dispatch} =  this.props;
    dispatch({
      type: "Formexample/update"
    });
  }

  render(){
    const {list} = this.props.list;
    console.log(this.props);
    console.log(list);
    console.log(list.data);
    return(
      <div style={{margin:20}}>
        <List
          grid={{ gutter: 24, lg: 4, md: 2, sm: 1, xs: 1 }}
          dataSource={list.data}
          renderItem={item => (
            <List.Item>
              <Card
                hoverable
                cover={<img alt="example" src={item.logo} />}
                title={item.org_name}
              >
                {item.address}
              </Card>
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default connect(state =>{
  return{
    list: state.Formexample
  }
})(FormDemo);
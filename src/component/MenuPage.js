import React from 'react';
import 'antd/dist/antd.css';
import {Input, Button, DatePicker, Menu, TimePicker } from 'antd';
import {
  ClockCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import moment from 'moment';

const { SubMenu } = Menu;
const { RangePicker } = TimePicker;
const dateFormat = 'YYYY/MM/DD';


class MenuPage extends React.Component{
render(){return(<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">


<SubMenu key="time" icon={<ClockCircleOutlined />} title="Time">
  <Menu.Item key="1">
    <RangePicker />
  </Menu.Item>
  <Menu.Item key="2">
  <DatePicker defaultValue={moment('2021/01/01', dateFormat)} format={dateFormat} />
  </Menu.Item>
</SubMenu>

<SubMenu key="sub1" icon={<UserOutlined />} title="User">
  <Menu.Item key="3">
        <Input placeholder="Your First Name" />
  </Menu.Item>
  <Menu.Item key="4">
        <Input placeholder="Your Last Name" />
  </Menu.Item>
  <Menu.Item key="5">
        <Input placeholder="Your Phone Number" />
  </Menu.Item>
  <Menu.Item key="6">
        <Input placeholder="Your Email" />
  </Menu.Item>
</SubMenu>
<Menu.Item>
<Button type="primary" >Submit</Button>
</Menu.Item>
</Menu>)}
}

export default MenuPage;

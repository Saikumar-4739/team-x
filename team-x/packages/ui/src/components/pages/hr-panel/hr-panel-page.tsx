import React, { useState } from 'react';
import { Layout, Menu, Button, Table, Card } from 'antd';
import {
  UserAddOutlined,
  TeamOutlined,
  GiftOutlined,
  MailOutlined,
  FormOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

const HRPanelLayout = () => {
  const [selectedMenu, setSelectedMenu] = useState('allEmployees');
  
  // Dummy data for the employee list
  const dummyEmployeeData = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', position: 'HR Manager', department: 'Human Resources' },
    { id: 3, name: 'Alice Johnson', position: 'Product Designer', department: 'Design' },
    { id: 4, name: 'Bob Brown', position: 'Project Manager', department: 'Engineering' },
    { id: 5, name: 'Emma Wilson', position: 'Data Analyst', department: 'Analytics' },
  ];

  // Dummy data for team birthdays
  const dummyBirthdayData = [
    { id: 1, name: 'John Doe', birthday: '2024-10-30' },
    { id: 2, name: 'Jane Smith', birthday: '2024-12-15' },
    { id: 3, name: 'Alice Johnson', birthday: '2024-07-22' },
    { id: 4, name: 'Bob Brown', birthday: '2024-05-14' },
    { id: 5, name: 'Emma Wilson', birthday: '2024-11-01' },
  ];

  // State for employee data and team birthdays
  const [employeeData] = useState(dummyEmployeeData);
  const [teamBirthdays] = useState(dummyBirthdayData);

  // Employee Table Columns
  const employeeColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Position', dataIndex: 'position', key: 'position' },
    { title: 'Department', dataIndex: 'department', key: 'department' },
  ];

  // Team Birthday Columns
  const birthdayColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Birthday', dataIndex: 'birthday', key: 'birthday' },
  ];

  const handleMenuClick = (menuKey: React.SetStateAction<string>) => {
    setSelectedMenu(menuKey);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'allEmployees':
        return (
          <Card title="All Employee List">
            <Table dataSource={employeeData} columns={employeeColumns} rowKey="id" />
          </Card>
        );
      case 'teamBirthdays':
        return (
          <Card title="Team Birthdays">
            <Table dataSource={teamBirthdays} columns={birthdayColumns} rowKey="id" />
          </Card>
        );
      case 'leaveApprovals':
        return <Card title="Leave Approvals">Leave approvals management goes here...</Card>;
      case 'sendAnnouncement':
        return (
          <Card title="Send Announcements">
            <Button type="primary" onClick={() => console.log('Sending Announcement')}>
              Send Announcement
            </Button>
          </Card>
        );
      case 'hireEmployee':
        return <Card title="Hire Employee">Hire new employee functionality goes here...</Card>;
      case 'employeeApplication':
        return <Card title="Employee Application">Employee application submission...</Card>;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['allEmployees']}
          onClick={(e) => handleMenuClick(e.key)}
        >
          <Menu.Item key="addEmployee" icon={<UserAddOutlined />}>
            Add Employee
          </Menu.Item>
          <Menu.Item key="allEmployees" icon={<TeamOutlined />}>
            All Employee List
          </Menu.Item>
          <Menu.Item key="teamBirthdays" icon={<GiftOutlined />}>
            Team Birthdays
          </Menu.Item>
          <Menu.Item key="leaveApprovals" icon={<FileTextOutlined />}>
            Leave Approvals
          </Menu.Item>
          <Menu.Item key="sendAnnouncement" icon={<MailOutlined />}>
            Send Announcements
          </Menu.Item>
          <Menu.Item key="hireEmployee" icon={<FormOutlined />}>
            Hire Employee
          </Menu.Item>
          <Menu.Item key="employeeApplication" icon={<FormOutlined />}>
            Employee Application
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360 }}>{renderContent()}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HRPanelLayout;

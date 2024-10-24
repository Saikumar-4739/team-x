import React, { useState } from 'react';
import { Layout as AntLayout, Menu, Tooltip, Button, theme } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  UsergroupAddOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  FileSearchOutlined,
  FileDoneOutlined,
  ExperimentOutlined,
  MenuOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = AntLayout;

const menuItems = [
  { key: 'employee-panel', icon: <UsergroupAddOutlined />, label: 'My Profile', path: '/employee-panel/details' },
  { key: 'leave-management', icon: <FileTextOutlined />, label: 'Leave Management', path: '/employee-panel/leave-management' },
  { key: 'timesheet', icon: <ClockCircleOutlined />, label: 'Timesheet', path: '/employee-panel/timesheet' },
  { key: 'payslips', icon: <FileSearchOutlined />, label: 'Pay slips', path: '/employee-panel/payslips' },
  { key: 'feedback', icon: <FileDoneOutlined />, label: 'Feedback', path: '/employee-panel/feedback' },
  { key: 'training-development', icon: <ExperimentOutlined />, label: 'Development', path: '/employee-panel/training-development' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const currentKey = location.pathname.split('/')[2] || 'employee-panel';
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <AntLayout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
     <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#001529', display: 'flex', alignItems: 'center' }}>

        <Button
          type="text"
          icon={<MenuOutlined style={{ color: '#FFF' }} />}
          onClick={toggleCollapsed}
          aria-label={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          style={{ marginRight: 20 }}
        />
      </Header>

      <AntLayout style={{ marginTop: 64, flex: 1 }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          style={{
            position: 'fixed',
            height: '100%',
            left: 0,
            top: 64,
            zIndex: 1,
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[currentKey]}
            style={{ height: '100%', borderRight: 0 }}
          >
            {menuItems.map(item => (
             <Menu.Item key={item.key} icon={item.icon} style={{ display: 'flex', alignItems: 'center' }}>
             <Link to={item.path} aria-label={item.label} style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
               <Tooltip title={item.label}>
                 <span
                   style={{
                     flex: 1,
                     textDecoration: currentKey === item.key ? 'underline' : 'none',
                     visibility: collapsed ? 'hidden' : 'visible',
                     color: '#fff', // Default color (white)
                     transition: 'color 0.3s ease', // Smooth color transition
                   }}
                   onMouseEnter={(e) => (e.currentTarget.style.color = '#1890ff')} // Hover color change (blue)
                   onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')} // Revert to white on leave
                 >
                   {item.label}
                 </span>
               </Tooltip>
             </Link>
           </Menu.Item>
           
            ))}
          </Menu>
        </Sider>

        <Content style={{ marginLeft: collapsed ? 80 : 200, padding: '20px 16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children} {/* Render the children components here */}
          </div>
        </Content>
      </AntLayout>

      <Footer style={{ textAlign: 'center', width: '100%', position: 'relative' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </AntLayout>
  );
};

export default Layout;

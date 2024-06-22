import { Button } from 'antd';
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <>
    <div>Dashboard</div>
    <Button onClick={ logout }>Logout</Button>
    </>
  );
};

export default Dashboard;
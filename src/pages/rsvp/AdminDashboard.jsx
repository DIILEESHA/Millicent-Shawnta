import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Card, Modal, Typography } from 'antd';
import { DownloadOutlined, LockOutlined } from '@ant-design/icons';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import * as XLSX from 'xlsx';
import { useNavigate } from 'react-router-dom';
import './admin.css';

const { Title } = Typography;

const AdminDashboard = () => {
  const [rsvps, setRsvps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  // Correct password (store more securely in production)
  const ADMIN_PASSWORD = "wedding25"; 

  useEffect(() => {
    if (authenticated) {
      fetchRsvps();
    }
  }, [authenticated]);

  const fetchRsvps = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "rsvps"));
      const rsvpData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate()?.toLocaleString() || 'N/A'
      }));
      setRsvps(rsvpData);
    } catch (error) {
      console.error("Error fetching RSVPs: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rsvps);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "RSVPs");
    XLSX.writeFile(workbook, "wedding_rsvps.xlsx");
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Attending',
      dataIndex: 'attending',
      key: 'attending',
      filters: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      onFilter: (value, record) => record.attending === value,
    },
    {
      title: 'Events',
      dataIndex: 'events',
      key: 'events',
      render: events => events.join(', '),
    },
    {
      title: 'Guest Count',
      dataIndex: 'guestCount',
      key: 'guestCount',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
      ellipsis: true,
    },
    {
      title: 'Submitted At',
      dataIndex: 'timestamp',
      key: 'timestamp',
      sorter: (a, b) => new Date(a.timestamp) - new Date(b.timestamp),
    },
  ];

  if (!authenticated) {
    return (
      <div className="admin-login-container">
        <Card className="login-card">
          <div className="login-header">
            <LockOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
            <Title level={3} style={{ margin: '16px 0' }}>Admin Dashboard</Title>
          </div>
          <Input.Password
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onPressEnter={handleLogin}
            status={passwordError ? 'error' : ''}
            style={{ marginBottom: '16px' }}
          />
          {passwordError && (
            <p style={{ color: 'red', marginBottom: '16px' }}>Incorrect password. Please try again.</p>
          )}
          <Button 
            type="primary" 
            onClick={handleLogin}
            block
          >
            Login
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <Title level={2}>Wedding RSVP Dashboard</Title>
        <div className="action-buttons">
          <Button 
            type="primary" 
            icon={<DownloadOutlined />} 
            onClick={exportToExcel}
          >
            Export to Excel
          </Button>
          <Button 
            danger
            onClick={() => {
              setAuthenticated(false);
              setPassword('');
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={rsvps}
        loading={loading}
        rowKey="id"
        bordered
        size="middle"
        scroll={{ x: 'max-content' }}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '50', '100'],
        }}
      />
    </div>
  );
};

export default AdminDashboard;
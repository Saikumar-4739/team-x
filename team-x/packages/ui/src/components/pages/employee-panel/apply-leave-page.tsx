// src/components/EmployeePanel/LeaveManagement.tsx
import React, { useState } from 'react';
import { Form, Input, Select, DatePicker, Button, message, Table, Tag, Row, Col } from 'antd';

const { Option } = Select;

// Define a type for leave types
type LeaveType = 'casual' | 'sick' | 'privileged' | 'compOff';

interface LeaveRequest {
    key: string;
    employeeName: string;
    leaveType: LeaveType; // Use the LeaveType here
    startDate: string;
    endDate: string;
    reason: string;
    status: string;
    backupEmployee: string; // Add backup employee field
}

// Sample employee data (replace with actual data source)
const employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
];

const LeaveManagement: React.FC = () => {
    const [form] = Form.useForm();
    const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);

    // Leave counts for different types
    const [leaveCounts, setLeaveCounts] = useState<{
        casual: number;
        sick: number;
        privileged: number;
        compOff: number;
    }>({
        casual: 7,
        sick: 7,
        privileged: 10,
        compOff: 4,
    });

    const handleFinish = (values: any) => {
        const newRequest: LeaveRequest = {
            key: Date.now().toString(), // Use timestamp as a unique key
            employeeName: values.employeeName,
            leaveType: values.leaveType,
            startDate: values.startDate.format('YYYY-MM-DD'),
            endDate: values.endDate.format('YYYY-MM-DD'),
            reason: values.reason,
            status: 'Pending', // Default status when submitted
            backupEmployee: values.backupEmployee, // Include backup employee
        };

        // Update leave counts using the LeaveType type for safety
        setLeaveCounts((prevCounts) => ({
            ...prevCounts,
            [values.leaveType]: prevCounts[values.leaveType as LeaveType] + 1, // Cast to LeaveType
        }));

        setLeaveRequests([...leaveRequests, newRequest]);
        message.success('Leave request submitted successfully!');
        form.resetFields(); // Reset the form fields
    };

    const leaveCountData = [
        {
            key: '1',
            type: 'Casual Leave',
            count: leaveCounts.casual,
        },
        {
            key: '2',
            type: 'Sick Leave',
            count: leaveCounts.sick,
        },
        {
            key: '3',
            type: 'Privileged Leave',
            count: leaveCounts.privileged,
        },
        {
            key: '4',
            type: 'Comp Off',
            count: leaveCounts.compOff,
        },
    ];

    const columns = [
        {
            title: 'Employee Name',
            dataIndex: 'employeeName',
            key: 'employeeName',
        },
        {
            title: 'Backup Employee',
            dataIndex: 'backupEmployee', // Add backup employee to table columns
            key: 'backupEmployee',
        },
        {
            title: 'Leave Type',
            dataIndex: 'leaveType',
            key: 'leaveType',
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: 'End Date',
            dataIndex: 'endDate',
            key: 'endDate',
        },
        {
            title: 'Reason',
            dataIndex: 'reason',
            key: 'reason',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => {
                let color = 'gold';
                if (status === 'Approved') {
                    color = 'green';
                } else if (status === 'Rejected') {
                    color = 'red';
                }
                return (
                    <Tag color={color}>
                        {status}
                    </Tag>
                );
            },
        },
    ];

    const leaveCountColumns = [
        {
            title: 'Leave Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Count',
            dataIndex: 'count',
            key: 'count',
            render: (count: number) => <Tag color="blue">{count}</Tag>,
        },
    ];

    return (
        <div>
            <Row gutter={16} style={{ marginBottom: '20px' }}>
                <Col span={12}>
                    <h3>Leave Count</h3>
                    <Table
                        dataSource={leaveCountData}
                        columns={leaveCountColumns}
                        pagination={false}
                    />
                </Col>
                <Col span={12}>
                    <h3>Submitted Leave Requests</h3>
                    <Table
                        dataSource={leaveRequests}
                        columns={columns}
                        pagination={false}
                    />
                </Col>
            </Row>

            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                requiredMark={false}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Employee Name"
                            name="employeeName"
                            rules={[{ required: true, message: 'Please select an employee!' }]}
                        >
                            <Select placeholder="Select an employee">
                                {employees.map((employee) => (
                                    <Option key={employee.id} value={employee.name}>
                                        {employee.name}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Backup Employee"
                            name="backupEmployee" // Change name to match state
                            rules={[{ required: true, message: 'Please select a backup employee!' }]}
                        >
                            <Select placeholder="Select a backup employee">
                                {employees.map((employee) => (
                                    <Option key={employee.id} value={employee.name}>
                                        {employee.name}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Leave Type"
                            name="leaveType"
                            rules={[{ required: true, message: 'Please select a leave type!' }]}
                        >
                            <Select placeholder="Select Leave Type">
                                <Option value="casual">Casual Leave</Option>
                                <Option value="sick">Sick Leave</Option>
                                <Option value="privileged">Privileged Leave</Option>
                                <Option value="compOff">Comp Off</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Start Date"
                            name="startDate"
                            rules={[{ required: true, message: 'Please select a start date!' }]}
                        >
                            <DatePicker 
                                format="YYYY-MM-DD" 
                                style={{ width: '100%' }} 
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="End Date"
                            name="endDate"
                            rules={[{ required: true, message: 'Please select an end date!' }]}
                        >
                            <DatePicker 
                                format="YYYY-MM-DD" 
                                style={{ width: '100%' }} 
                            />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            label="Reason for Leave"
                            name="reason"
                            rules={[{ required: true, message: 'Please provide a reason for your leave!' }]}
                        >
                            <Input.TextArea 
                                rows={4} 
                                placeholder="Please explain your reason for leave" 
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit Leave Request
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LeaveManagement;

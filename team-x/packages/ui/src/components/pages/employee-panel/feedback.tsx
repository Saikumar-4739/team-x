// src/components/EmployeePanel/Feedback.tsx
import React, { useState } from 'react';
import { Form, Input, Button, Table } from 'antd';

interface FeedbackEntry {
  key: string;
  employeeName: string;
  feedback: string;
  date: string;
}

const Feedback: React.FC = () => {
  const [form] = Form.useForm();
  const [feedbackHistory, setFeedbackHistory] = useState<FeedbackEntry[]>([]);

  const handleSubmit = (values: any) => {
    const newFeedback: FeedbackEntry = {
      key: Date.now().toString(),
      employeeName: values.employeeName,
      feedback: values.feedback,
      date: new Date().toLocaleString(),
    };

    setFeedbackHistory([...feedbackHistory, newFeedback]);
    form.resetFields();
  };

  const columns = [
    {
      title: 'Employee Name',
      dataIndex: 'employeeName',
      width: 200,
    },
    {
      title: 'Feedback',
      dataIndex: 'feedback',
      width: 300,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      width: 200,
    },
  ];

  return (
    <div>
      <h2>Feedback</h2>

      <Form form={form} layout="vertical" onFinish={handleSubmit} className="mb-6">
        <Form.Item
          label="Employee Name"
          name="employeeName"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Feedback"
          name="feedback"
          rules={[{ required: true, message: 'Please provide your feedback' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Feedback
          </Button>
        </Form.Item>
      </Form>

      <Table
        columns={columns}
        dataSource={feedbackHistory}
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default Feedback;

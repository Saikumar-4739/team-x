import React from 'react';
import { Form, Input, Select, DatePicker, Button, Table, Row, Col } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';

interface TimesheetEntry {
  key: string;
  projectCode: string;
  task: string;
  taskType: string;
  hrs: number;
  minutes: number;
  overTime: string;
  remarks: string;
}

interface TimesheetFormProps {
  onSubmit?: (values: any) => void;
}

const Timesheet: React.FC<TimesheetFormProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const columns: TableProps<TimesheetEntry>['columns'] = [
    {
      title: '#',
      dataIndex: 'key',
      width: 50,
    },
    {
      title: 'Project Code',
      dataIndex: 'projectCode',
      width: 150,
    },
    {
      title: 'Task',
      dataIndex: 'task',
      width: 200,
    },
    {
      title: 'Task Type',
      dataIndex: 'taskType',
      width: 150,
    },
    {
      title: 'Hrs',
      dataIndex: 'hrs',
      width: 80,
    },
    {
      title: 'Minutes',
      dataIndex: 'minutes',
      width: 80,
    },
    {
      title: 'Over Time',
      dataIndex: 'overTime',
      width: 100,
    },
    {
      title: 'Remarks',
      dataIndex: 'remarks',
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 100,
      render: (_, record) => (
        <Button type="link" onClick={() => handleDelete(record.key)}>
          Delete
        </Button>
      ),
    },
  ];

  const [dataSource, setDataSource] = React.useState<TimesheetEntry[]>([]);

  const handleDelete = (key: string) => {
    setDataSource(dataSource.filter(item => item.key !== key));
  };

  const handleAdd = (values: any) => {
    const newEntry: TimesheetEntry = {
      key: Date.now().toString(),
      projectCode: values.projectCode,
      task: values.task,
      taskType: values.taskType,
      hrs: values.hrs || 0,
      minutes: values.minutes || 0,
      overTime: values.overTime || 'No',
      remarks: values.remarks || '',
    };

    setDataSource([...dataSource, newEntry]);
    form.resetFields(['task', 'taskType', 'hrs', 'minutes', 'overTime', 'remarks']);
  };

  return (
    <div className="p-4">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleAdd}
        initialValues={{
          date: dayjs(),
          resourceName: '',
          leave: 'No',
          overTime: 'No',
        }}
      >
        {/* First Row */}
        <Row gutter={16} className="mb-6">
          <Col span={4}>
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: 'Please select date' }]}
            >
              <DatePicker className="w-full" />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="Resource Name"
              name="resourceName"
              rules={[{ required: true, message: 'Please enter resource name' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="Leave"
              name="leave"
              rules={[{ required: true, message: 'Please select leave status' }]}
            >
              <Select>
                <Select.Option value="No">No</Select.Option>
                <Select.Option value="Yes">Yes</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Second Row */}
        <Row gutter={16} className="mb-6">
          <Col span={6}>
            <Form.Item
              label="Project"
              name="projectCode"
              rules={[{ required: true, message: 'Please select project code' }]}
            >
              <Select>
                <Select.Option value="Project A">
                  Project A
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Task Type"
              name="taskType"
              rules={[{ required: true, message: 'Please select task type' }]}
            >
              <Select>
                <Select.Option value="Development">Development</Select.Option>
                <Select.Option value="Testing">Testing</Select.Option>
                <Select.Option value="Documentation">Documentation</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Task"
              name="task"
              rules={[{ required: true, message: 'Please enter task description' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Hrs"
              name="hrs"
              rules={[{ required: true, message: 'Please enter hours' }]}
            >
              <Input type="number" min={0} max={24} />
            </Form.Item>
          </Col>
        </Row>

        {/* Third Row */}
        <Row gutter={16} className="mb-6">
          <Col span={6}>
            <Form.Item
              label="Minutes"
              name="minutes"
              rules={[{ required: true, message: 'Please enter minutes' }]}
            >
              <Input type="number" min={0} max={59} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Over Time"
              name="overTime"
              rules={[{ required: true, message: 'Please select overtime status' }]}
            >
              <Select>
                <Select.Option value="No">No</Select.Option>
                <Select.Option value="Yes">Yes</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Remarks" name="remarks">
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>

        <div className="flex justify-end gap-4 mb-6">
          <Button type="primary" htmlType="submit">
            Add
          </Button>
          <Button onClick={() => form.resetFields()}>Clear</Button>
        </div>
      </Form>

      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default Timesheet;

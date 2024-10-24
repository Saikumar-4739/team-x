import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Input, Row, Col, Spin, Alert } from 'antd';


interface Employee {
    id: number;
    name: string;
    joiningDate: string;
    mobileNumber: string;
    alternativeMobileNumber: string;
    qualification: string;
    learnedTechnologies: string;
    experience: string;
    currentCtc: string;
    noticePeriod: string;
    employeeCode: string;
    bankAccountNumber: string;
    ifscCode: string;
    branchName: string;
    aadharNumber: string;
    panNumber: string;
    passportNumber: string;
}

const EmployeeDetails: React.FC = () => {
    const [employee, setEmployee] = useState<Employee | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const employeeId = localStorage.getItem('employeeId'); // Get employee ID from local storage

        if (employeeId) {
            const fetchEmployeeDetails = async () => {
                try {
                    const response = await axios.get<Employee>(`http://localhost:3000/employees/${employeeId}`); // Replace with your API endpoint
                    setEmployee(response.data);
                } catch (error) {
                    setError('Error fetching employee details. Please try again later.');
                    console.error('Error fetching employee details:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchEmployeeDetails();
        } else {
            setError('Employee ID not found in local storage.');
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <Spin tip="Loading employee details..." />;
    }

    if (error) {
        return <Alert message="Error" description={error} type="error" showIcon />;
    }

    return (
        <div>
            {employee ? (
                <Form
                    layout="vertical"
                    initialValues={{
                        name: employee.name,
                        mobileNumber: employee.mobileNumber,
                        alternativeMobileNumber: employee.alternativeMobileNumber,
                        qualification: employee.qualification,
                        learnedTechnologies: employee.learnedTechnologies,
                        experience: employee.experience,
                        currentCtc: employee.currentCtc,
                        noticePeriod: employee.noticePeriod,
                        bankAccountNumber: employee.bankAccountNumber,
                        ifscCode: employee.ifscCode,
                        branchName: employee.branchName,
                        aadharNumber: employee.aadharNumber,
                        panNumber: employee.panNumber,
                        passportNumber: employee.passportNumber,
                    }}
                >
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Name" name="name">
                                <Input style={{ width: '100%' }} value={employee.name} disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Mobile Number" name="mobileNumber">
                                <Input style={{ width: '100%' }} value={employee.mobileNumber} disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Alternative Mobile Number" name="alternativeMobileNumber">
                                <Input style={{ width: '100%' }} value={employee.alternativeMobileNumber} disabled />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Qualification" name="qualification">
                                <Input style={{ width: '100%' }} value={employee.qualification} disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Technologies Learned" name="learnedTechnologies">
                                <Input style={{ width: '100%' }} value={employee.learnedTechnologies} disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Experience" name="experience">
                                <Input style={{ width: '100%' }} value={employee.experience} disabled />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Current CTC" name="currentCtc">
                                <Input style={{ width: '100%' }} value={employee.currentCtc} disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Notice Period" name="noticePeriod">
                                <Input style={{ width: '100%' }} value={employee.noticePeriod} disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Bank Account Number" name="bankAccountNumber">
                                <Input style={{ width: '100%' }} value={employee.bankAccountNumber} disabled />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="IFSC Code" name="ifscCode">
                                <Input style={{ width: '100%' }} value={employee.ifscCode} disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Branch Name" name="branchName">
                                <Input style={{ width: '100%' }} value={employee.branchName} disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Aadhar Number" name="aadharNumber">
                                <Input style={{ width: '100%' }} value={employee.aadharNumber} disabled />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="PAN Number" name="panNumber">
                                <Input style={{ width: '100%' }} value={employee.panNumber} disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Passport Number" name="passportNumber">
                                <Input style={{ width: '100%' }} value={employee.passportNumber} disabled />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ) : (
                <p>No employee details found.</p>
            )}
        </div>
    );
    
    
};

export default EmployeeDetails;

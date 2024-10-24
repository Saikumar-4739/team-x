// src/components/EmployeePanel/Documents.tsx
import React, { useState } from 'react';
import { Button, List, Select, Row, Col } from 'antd';
import { DownloadOutlined, PrinterOutlined } from '@ant-design/icons';

const { Option } = Select;

// Define the type for payslip items
interface Payslip {
    name: string;
    url: string;
}

// Define the type for payslipsData
const payslipsData: Record<string, Payslip[]> = {
    January: [
        { name: 'Payslip-January-2024.pdf', url: '/payslips/January-2024.pdf' }
    ],
    February: [
        { name: 'Payslip-February-2024.pdf', url: '/payslips/February-2024.pdf' }
    ],
    // Add more months and payslips as needed
};

const Payslip: React.FC = () => {
    const [selectedMonth, setSelectedMonth] = useState<string>('January');
    const payslips: Payslip[] = payslipsData[selectedMonth] || []; // Get payslips for the selected month

    const handleMonthChange = (value: string) => {
        setSelectedMonth(value); // Update selected month when changed
    };


    const handleDownload = (url: string) => {
        console.log('Downloading:', url);
        // Logic for downloading the file (usually handled by the browser)
    };

    const handlePrint = (url: string) => {
        console.log('Printing:', url);
        // Logic for printing the file (can open the file in a new window for print)
        window.open(url, '_blank');
    };

    return (
        <div>
            <Row justify="space-between" align="middle">
                <Col>
                    <h2>Payslips</h2>
                </Col>
                <Col>
                    <Select 
                        defaultValue={selectedMonth} 
                        onChange={handleMonthChange} // Triggered when a month is selected
                        style={{ width: 200 }}
                    >
                        {Object.keys(payslipsData).map(month => (
                            <Option key={month} value={month}>{month}</Option>
                        ))}
                    </Select>
                </Col>
            </Row>

            {/* Payslips List for Selected Month */}
            <div>
                <h3>Payslips for {selectedMonth}</h3>
                <List
                    dataSource={payslips} // Displays payslips based on selected month
                    renderItem={(item: Payslip) => (
                        <List.Item
                            actions={[
                                <Button 
                                    icon={<DownloadOutlined />} 
                                    onClick={() => handleDownload(item.url)}
                                >
                                    Download
                                </Button>,
                                <Button 
                                    icon={<PrinterOutlined />} 
                                    onClick={() => handlePrint(item.url)}
                                >
                                    Print
                                </Button>
                            ]}
                        >
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                {item.name}
                            </a>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
};

export default Payslip;

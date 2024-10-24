import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LeaveManagement from 'src/components/pages/employee-panel/apply-leave-page';
import EmployeeDetails from 'src/components/pages/employee-panel/employee-profile';
import Feedback from 'src/components/pages/employee-panel/feedback';
import Payslip from 'src/components/pages/employee-panel/pay-slips-page';
import Timesheet from 'src/components/pages/employee-panel/time-sheet-page';


const EmployeePanel: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="details" element={<EmployeeDetails />} />
        <Route path="leave-management" element={<LeaveManagement />} />
        <Route path="timesheet" element={<Timesheet />} />
        <Route path="payslips" element={<Payslip />} />
        <Route path="feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
};

export default EmployeePanel;

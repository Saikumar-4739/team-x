import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../basic-layout/employee-layout';
import EmployeePanel from 'src/basic-layout/all-components';


const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/employee-panel/*" element={<EmployeePanel />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

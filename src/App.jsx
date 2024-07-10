// This only covers the Login Page and the Grades Viewing Page.

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/** Pages */
import Login from './pages/Login';
import Error from './pages/404';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

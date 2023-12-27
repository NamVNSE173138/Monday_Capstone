import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import { PATH } from './config/path';
import Login from './pages/Login';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path={PATH.login} element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

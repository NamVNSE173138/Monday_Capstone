import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import { PATH } from './config/path';
import Login from './pages/Login';
import Resgister2 from './pages/Resgister2';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path={PATH.sign_up2} element={<Resgister2 />} />
        <Route path={PATH.login} element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

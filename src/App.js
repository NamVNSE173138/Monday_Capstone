import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import { PATH } from './config/path';
import Login from './pages/Login';
import Resgister2 from './pages/Resgister2';
import Register3 from './pages/Register3';
import Register4 from './pages/Register4';
import Register5 from './pages/Register5';
import Board from './pages/Board';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path={PATH.sign_up2} element={<Resgister2 />} />
        <Route path={PATH.sign_up3} element={<Register3 />} />
        <Route path={PATH.sign_up4} element={<Register4 />} />
        <Route path={PATH.sign_up5} element={<Register5 />} />
        <Route path={PATH.login} element={<Login />} />
        <Route path={PATH.board} element={<Board />} />
      </Routes>
    </>
  );
}

export default App;

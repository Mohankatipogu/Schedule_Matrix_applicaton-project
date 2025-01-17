import logo from './logo.svg';
import './App.css';
 import Schedule from './features/schedule/schedule';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className='m-4 p-2'>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

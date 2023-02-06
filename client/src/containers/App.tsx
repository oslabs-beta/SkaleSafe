import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import { Error } from '../components/Error/Error.tsx';
import HomeContainer from '../containers/HomeContainer';
import Navbar from '../components/Navbar/Navbar';



const App = () => {
  return (
    <div>
      <Navbar />

      <div>
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/home' element={<HomeContainer />} />
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

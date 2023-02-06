import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import { Error } from '../components/Error';
import HomeContainer from '../containers/HomeContainer';
import Navbar from '../components/Navbar/Navbar';



const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />

      <div>
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/home' element={<HomeContainer />} />
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;

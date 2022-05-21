import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './Shared/Footer/Footer';
import Menubar from './Shared/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      <Menubar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='' element></Route>
          <Route path='' element></Route>
          <Route path='' element></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        </Routes>
        <div className='mt-20'>
          <Footer></Footer>
        </div>
      </Menubar>
    </div>
  );
}

export default App;

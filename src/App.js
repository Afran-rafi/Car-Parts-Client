import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './Shared/Footer/Footer';
import Menubar from './Shared/Menubar/Menubar';
import PageError from './Shared/PageError/PageError';
import RequireAuth from './Shared/RequireAuth/RequiredAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/DashboardPage/MyOrder';
import Payment from './Pages/DashboardPage/Payment';
import AddReview from './Pages/DashboardPage/AddReview';
import MyProfile from './Pages/DashboardPage/MyProfile';
import AddProfile from './Pages/AddProfile/AddProfile';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile';

function App() {
  return (
    <div className="App">
      <Menubar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/purchase/:id' element={<RequireAuth><PurchasePage></PurchasePage></RequireAuth>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route index element={<MyOrder></MyOrder>}></Route>
            <Route path='/dashboard/addReviews' element={<AddReview></AddReview>}></Route>
            <Route path='/dashboard/profile' element={<MyProfile></MyProfile>}></Route>
            <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
          </Route>
          <Route path='/addProfile' element={<AddProfile></AddProfile>}></Route>
          <Route path='/UpdateProfile' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<PageError></PageError>}></Route>
        </Routes>
        <div className='mt-20'>
          <Footer></Footer>
          <ToastContainer />
        </div>
      </Menubar>
    </div >
  );
}

export default App;

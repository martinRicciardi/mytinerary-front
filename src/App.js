import './styles/App.css';
import Header from './pages/Header';
import DetailsPages from './pages/DetailsPages';
import Main from './pages/Main';
import Footer from './pages/Footer';
import CitiesMain from './components/CitiesMain';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn'
import {Route,Routes} from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import userActions from './redux/actions/userActions';
import Alerts from './components/Alerts';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    if(localStorage.getItem("token")!== null){
      const token = localStorage.getItem("token")
      dispatch(userActions.verifyToken(token))
    }
  })
  // const user = useSelector(store=>store.userReducers.user)
  // console.log(user);

  return (
      <div className="App">
        <Alerts/>
        <Header />
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/cities" element={<CitiesMain />} />
          <Route path="/cities/:id" element={<DetailsPages />} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/signIn" element={<SignIn/>} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App

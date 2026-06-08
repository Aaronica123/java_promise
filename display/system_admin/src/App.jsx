import './App.css'
import Success_alert from './notifications/success.jsx';
import Error from './notifications/error.jsx';
import Logout from './notifications/logout.jsx';
import Sidebar from './sidebar/sidebar.jsx';
import Dash_1 from './dashboards/registry_dashboard.jsx';
import Login from './dashboards/login.jsx';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Payload from './security/role.jsx';
import Register_form from './dashboards/register_form.jsx';

function App() {


  return (
    <>
    {/* <Success_alert /> */}
    {/* <Error/> */}
    {/* <Logout/> */}
    {/* <Sidebar/> */}
    {/* <Dash_1/> */}
    {/* <Login/> */}
    {/* <Register_form/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/logout" element={<Logout/>}/> */}
        <Route path='/dashboard' element={
          <Payload>
          <Dash_1/>
          </Payload>
        }/>
        <Route path="/register"element={<Register_form/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App;

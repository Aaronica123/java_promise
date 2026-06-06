import './App.css'
import Success_alert from './notifications/success.jsx';
import Error from './notifications/error.jsx';
import Logout from './notifications/logout.jsx';
import Sidebar from './sidebar/sidebar.jsx';
import Dash_1 from './dashboards/registry_dashboard.jsx';
import Login from './dashboards/login.jsx';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
function App() {


  return (
    <>
    {/* <Success_alert /> */}
    {/* <Error/> */}
    {/* <Logout/> */}
    {/* <Sidebar/> */}
    {/* <Dash_1/> */}
    {/* <Login/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/dashboard' element={<Dash_1/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;

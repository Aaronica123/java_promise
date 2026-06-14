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
import View_orders from './orders/view_orders.jsx';
import New_order from './orders/new_order.jsx';
import Create_order from './orders/create_order.jsx';
import Dash_2 from './dashboards/dashboard.jsx';
import New_sidebar from './sidebar/new_sidebar.jsx';
globalThis.p1=true;
globalThis.p2=false;
globalThis.count=-1;
globalThis.buff=null;
globalThis.bn=0;
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
    {/* <View_orders/> */}
    {/* <New_order/> */}
    {/* <Create_order/> */}
    {/* <Dash_2/> */}
    {/* <New_sidebar/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/> 
         <Route path="/logout" element={<Logout/>}/> 
        <Route path='/dashboard' element={
          <Payload>
          <Dash_1/>
          </Payload>
        }/>
        <Route path="/register"element={<Register_form/>}/>
        <Route path="/create_order" element={<Create_order/>}/>
        <Route path="/view_order" element={<New_order/>}/>
        <Route path="/dash_2" element={<Dash_2/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;

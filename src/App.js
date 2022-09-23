import { HashRouter ,  Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import LoginReg from "./components/pages/auth/LoginReg";
import Dashboard from "./components/pages/Dashboard";
import ResetPassword from "./components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";



function App() {
  return ( <>
  <HashRouter>
  
    <Routes>
       <Route path="/" element= {<Layout/>}>
       <Route index  element={<Home/>}/>
       <Route path="contact"  element={<Contact/>}/>
       <Route path="login"  element={<LoginReg/>}/>
       <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
        <Route path="reset" element={<ResetPassword />} />
        </Route>
        <Route path="/dashboard"  element={<Dashboard/>}/> 
        {/*<Route path="*" element={<h1>Error 404 Page not found !!</h1>} />*/}
      </Routes>
      
  </HashRouter>
  </>
  );
  
}

export default App;

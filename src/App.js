import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from './components/AdminDashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navigation from './customer/components/navigation/Navigation';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

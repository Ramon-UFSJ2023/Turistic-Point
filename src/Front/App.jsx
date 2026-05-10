import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLoginPage from './Pages/Users/UserLoginPage';
import { SingleInPage } from './Pages/SingInPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserLoginPage />}/> 
        <Route path='/singInPage' element={<SingleInPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

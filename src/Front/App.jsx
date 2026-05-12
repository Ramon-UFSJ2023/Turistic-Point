import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {UserLoginPage} from './Pages/Users/UserLoginPage';
import { SingleInPage } from './Pages/SingInPage';
import { PageTeste } from './Pages/PageTeste';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserLoginPage />}/> 
        <Route path='/singInPage' element={<SingleInPage />}/>
        <Route path='/pageTeste' element={<PageTeste />}/>
      </Routes>
    </Router>
  );
}

export default App;

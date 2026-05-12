import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import { SingleInPage } from './Pages/SingInPage';
import { PageTeste } from './Pages/PageTeste';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />}/> 
        <Route path='/singInPage' element={<SingleInPage />}/>
        <Route path='/pageTeste' element={<PageTeste />}/>
      </Routes>
    </Router>
  );
}

export default App;

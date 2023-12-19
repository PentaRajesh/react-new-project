import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Registration from './Components/Registration';
import login from './Components/login'
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/registration' element={<Registration />}></Route>
      <Route path='/login' element={<login />}></Route>
      </Routes></BrowserRouter>

)
}

export default App;
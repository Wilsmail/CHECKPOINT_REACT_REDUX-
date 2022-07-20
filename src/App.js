import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import {Routes,Route} from "react-router-dom";
import {Home} from './components/Home'
import {Detail} from './components/Detail'


function App() {

  let users=useSelector(state=> state.users)
  return (
    <div className="Appp">
        <Routes>
        <Route path='/'     element={<Home users={users}/>} />
        <Route path='detail/:id' element={<Detail  users={users}  />} />
        
      </Routes>
    
        
        </div>)}


export default App;
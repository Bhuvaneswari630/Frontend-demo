
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import New from './Components/NewPersonForm';
import Person from './Components/Person';
import UpdatePersonForm from './Components/UpdatePersonForm';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/person' element={<Person />} />
          <Route path='/update' element={<UpdatePersonForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

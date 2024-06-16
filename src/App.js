import './App.css';
import Home from './screens/Home';
import Aboutus from './screens/Aboutus';
import Academic from './screens/Academic';
import Apply from './screens/Apply';
import Register from './screens/Register';
import Courses from './screens/Courses';
import './bg.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LOGIN from './screens/LOGIN';
import Chatbot from './screens/Chatbot';
import Admission from './screens/Admission';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Academic" element={<Academic />} />
          <Route path="/Apply" element={<Apply />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/LOGIN" element={<LOGIN/>}/>
          <Route path="/Courses" element={<Courses/>}/>
           <Route path="/Chat" element={<Chatbot/>}/> 
           <Route path='/Admission' element={<Admission/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

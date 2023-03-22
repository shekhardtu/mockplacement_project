
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="container" style={{margin:'70px'}}>
      <Navbar/>
    </div>
    <Routes>
    <Route path='/' element={<Quiz/>}></Route>   
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

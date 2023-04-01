import logo from './logo.svg';
import './App.css';
import Navbar from './components/pages/Navbar';
 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/pages/Error';
import CreateBook from './features/CreateBook';
import BookView from './features/BookView';

function App() {
  return (
    <div className="container mx-auto">
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<BookView />}></Route>
                <Route path='/create' element={<CreateBook />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;

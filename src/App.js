import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import FavList from './components/FavList/FavList';

function App() {
  return (
    <>
      <Navbar />
      <Container className="my-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favlist' element={<FavList />} />
        </Routes>
      </Container>
    </>

  );
}

export default App;

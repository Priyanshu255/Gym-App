import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';

import ExerciseDetail from './Pages/ExerciseDetail';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <Box width="400px" sx = {{width : {xl: '1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/Gym-App/' element={<Home />} />
        <Route path='/Gym-App/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App

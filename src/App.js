import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
// import Banner from './components/Banner';
import Footer from './components/Footer';

import Main from './pages/Main';
import Education from './pages/Education';
import StudLife from './pages/StudLife';
import Science from './pages/Science';
import NewStud from './pages/NewStud';
import Student from './pages/Student';
import Coop from './pages/Coop';
import Lib from './pages/Lib';
import AbUs from './pages/AbUs';
import NewsEvents from './pages/NewsEvents';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/education" element={<Education />} />
          <Route path="/studlife" element={<StudLife />} />
          <Route path="/science" element={<Science />} />
          <Route path="/newstud" element={<NewStud />} />
          <Route path="/student" element={<Student />} />
          <Route path="/coop" element={<Coop />} />
          <Route path="/lib" element={<Lib />} />
          <Route path="/abus" element={<AbUs />} />
          <Route path="/newsevents" element={<NewsEvents />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
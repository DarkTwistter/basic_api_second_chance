import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
/* import Body from './components/body/Body'; */
import Footer from './components/footer/Footer';
import EventList from './components/body/events/eventsList/EventsList';
import Start from './pages/start/Start';
import Main from './pages/main/Main';
import ActiveEvent from './components/body/events/activeEvent/ActiveEvent';
import Selects from './components/body/select/Selects';
import Your from './pages/your/Your';
import Auth from './pages/auth/Auth';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
        {/* <Body /> */}
        <Route path="/" element={<Start />} />
        <Route path="/main" element={<Main />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/event" element={<ActiveEvent event={{}} />} />
        <Route path="/selects" element={<Selects />} />
        <Route path="/your" element={<Your />} />
        <Route path="/auth" element={<Auth />} />
        </Routes>
        
        <Footer />
      </Router>

    </div>
  );
}


export default App;

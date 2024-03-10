import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './appcontext';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Home from './Home';

function App() {
  return (
    <AppProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <div style={{ display: 'flex', paddingTop: '70px', marginLeft: '0px' }}>
            <Sidebar />
            <div style={{ flex: 1, paddingLeft: '500px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                {/* Diğer route'larınız buraya eklenebilir */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;





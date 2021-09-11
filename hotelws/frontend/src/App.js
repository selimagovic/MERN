import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen.js';
import ContactScreen from './screens/ContactScreen.js';
import AboutScreen from './screens/AboutScreen.js';
import WorkScreen from './screens/WorkScreen.js';
import Header from './components/Header.js';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/work' component={WorkScreen} />
        </Container>
      </main>
    </Router>
  );
}

export default App;

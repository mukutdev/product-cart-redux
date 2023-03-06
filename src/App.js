import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  const [selectedTab , setSelectedTab] = useState('home')
  return (
    <div className="App">
      <Header onSelect={setSelectedTab}/>
      {
        selectedTab === 'home' ? <Home /> : <Cart/>
      }
    </div>
  );
}

export default App;

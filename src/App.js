import { useState } from 'react';
import { Provider} from 'react-redux';
import './App.css';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import store from './redux/store';

function App() {
  const [selectedTab , setSelectedTab] = useState('home')


  return (
   <Provider store={store}>
     <div className="App">
      <Header onSelect={setSelectedTab}/>
      {
        selectedTab === 'home' ? <Home /> : <Cart/>
      }
    </div>
   </Provider>
  );
}

export default App;

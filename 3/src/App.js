import { useRef } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PList from './components/PList';

function App() {

  let targetScrollRef = useRef()

  function scrollHandler() {
    targetScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div>
      <Header scrollHandler={scrollHandler} />
      <Footer ref={targetScrollRef} />
      <PList />
    </div>
  );
}

export default App;

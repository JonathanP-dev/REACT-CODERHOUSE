
import Card from './components/Card';
import './App.css';
import { useEffect, useState } from 'react';
import Navigation from './components/Navbar';
import { CARDITEMS } from './mockup';

function App({greeting}) {

  const [totalCompras, setTotalCompras] = useState(0)
  useEffect(() => {

  }, [totalCompras])
  return (
    <>
      <Navigation totalCompras={totalCompras}/>
      <main>
      {greeting}
      <div className='main-container'>
        {CARDITEMS.map((item) => {
          return <Card key={item.title} title={item.title} text={item.text} price={item.price} initialCompras={totalCompras} setTotalCompras={setTotalCompras}/>
        })}
      </div>
      </main>
    </>
  );
}

export default App;

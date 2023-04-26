
import './App.css';
import { useEffect, useState } from 'react';
import Navigation from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';


function App({greeting}) {

  const [totalCompras, setTotalCompras] = useState(0)
  useEffect(() => {

  }, [totalCompras])
  return (
    <>
      <Navigation totalCompras={totalCompras}/>
      <main>
      {greeting}
      <ItemListContainer totalCompras={totalCompras} setTotalCompras={setTotalCompras}/>
      </main>
    </>
  );
}

export default App;

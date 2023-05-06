
import './App.css';
import Navigation from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { Aside } from './components/Aside';


function App({greeting}) {

  return (
    <>
      <Navigation/>
      <div className='principalContainer'>
        <Aside />
        <ItemListContainer/>
      </div>
    </>
  );
}

export default App;

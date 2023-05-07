
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { Aside } from './components/Aside';
import { Header } from './components/Header';


function App({greeting}) {

  return (
    <>
      <Header/>
      <div className='principalContainer'>
        <Aside />
        <ItemListContainer/>
      </div>
    </>
  );
}

export default App;

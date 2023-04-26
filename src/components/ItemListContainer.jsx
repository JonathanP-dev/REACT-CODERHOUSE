import { CARDITEMS } from '../mockup';
import Card from '../components/Card';
export function ItemListContainer ({totalCompras, setTotalCompras}) {
  return (
    <div className='main-container'>
      {CARDITEMS.map((item) => {
        return <Card key={item.title} title={item.title} text={item.text} price={item.price} initialCompras={totalCompras} setTotalCompras={setTotalCompras}/>
      })}
    </div>
  );
}
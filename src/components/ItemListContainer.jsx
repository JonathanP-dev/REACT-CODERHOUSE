import { CARDITEMS } from '../mockup';
import Card from '../components/Card';
import { useFilters } from '../hooks/useFilters';

export function ItemListContainer () {

  const filterProducts = useFilters()
  
  const filteredProducts = filterProducts(CARDITEMS)

  return (
    <main className='main-container'>
      {filteredProducts.map((item) => {
        return <Card key={item.title} image={item.image} title={item.title} text={item.text} price={item.price}/>
      })}
    </main>
  );
}
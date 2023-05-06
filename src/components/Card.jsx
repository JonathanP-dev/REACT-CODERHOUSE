import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/Cart';


function BasicExample({title, text, price, image}) {
  const {totalCompras, setTotalCompras} = useContext(CartContext)
  const [compras, setCompras] = useState(0)
  let initialComprasTotal = totalCompras
  let initialCompras = compras
  const handleClickSuma = () => {
    setTotalCompras(initialComprasTotal += 1)
    setCompras(initialCompras += 1)
  }

  const handleClickResta = () => {
    if(initialComprasTotal <= 0){
      // disabled.classList.toggle('disabled')
      // console.log(disabled)
      return alert('Las compras no pueden ser menores a 0')
    }
    setTotalCompras(initialComprasTotal -= 1)
    setCompras(initialCompras -= 1)
  }

  return (
    <Card className='cardStyle' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{`${title} - $${price}`}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <div className='button-container'>
          <Button onClick={handleClickSuma} className='boton' variant="primary">+</Button>
          {compras <= 0 ? 
          <Button type='button' disabled onClick={handleClickResta} className='boton' variant="primary">-</Button>
          :
          <Button type='button' onClick={handleClickResta} className='boton' variant="primary">-</Button>
          }
        </div>
          {`Cantidad: ${compras}`}
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
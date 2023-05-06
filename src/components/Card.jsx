import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({initialCompras, setTotalCompras, title, text, price, image}) {

  const handleClickSuma = () => {
    setTotalCompras(initialCompras + 1)
  }

  const handleClickResta = () => {
    if(initialCompras <= 0){
      // disabled.classList.toggle('disabled')
      // console.log(disabled)
      return alert('Las compras no pueden ser menores a 0')
    }
    setTotalCompras(initialCompras - 1)
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
          <Button type='button' name='disabled' onClick={handleClickResta} className='boton' variant="primary">-</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
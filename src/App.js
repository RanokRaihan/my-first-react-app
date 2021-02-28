// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const rowStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    maxWidth: '1100px',
    margin: '50px auto',
    gridGap: '20px'
  };
  const productDetail = [
    {
      name: 'Photoshop',
      price: '$100.00'
    },
    {
      name: 'Illustrator',
      price: '$125.00'
    },
    {
      name: 'Premer Pro',
      price: '$255.00'
    },
    {
      name: 'Premer Pro',
      price: '$255.00'
    },
    {
      name: 'Premer Pro',
      price: '$255.00'
    },
    {
      name: 'Premer Pro',
      price: '$255.00'
    }
  ]
  return (
    <div className="App">
      <div style={rowStyle} >
        {
          productDetail.map(singleProduct => <Product product={singleProduct}></Product>)

        }
      </div>
      <Count></Count>
      <Users></Users>
    </div>
  );
}

function Product(props) {

  const gridItemStyle = {
    background: '#ccc',
    padding: '10px',
    borderRadius: '10px'
  };
  // console.log(props);
  return (
    <div style={gridItemStyle}>
      <h1>{props.product.name}</h1>
      <h3>{props.product.price}</h3>
      <button>buy Now</button>
    </div>

  )
}
function Count() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    setCount(count + 1)
  }
  const handleDecrease = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
    // console.log(users);
  });
  const gridItemStyle = {
    background: '#ccc',
    padding: '10px',
    borderRadius: '10px',
    margin: '8px 0'
  };
  return (
    <div>
      {
        users.map(user => {
          return (
            <div style={gridItemStyle}>
              <h1>name: {user.name}</h1>
              <h3>phone: {user.phone}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;

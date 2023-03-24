import './App.css';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';
import { Routes, Route } from 'react-router-dom'
import AddProduct from './components/AddProduct/AddProduct'

function App() {
  return (
    <div>
      <Menu />
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>

          </div>
        </div>
      </div>
      <Routes>
        <Route path='/' exact element={<ProductList />} />
        <Route path='/addorupdate/:id?' exact element={<AddProduct />} />
      </Routes>
    </div>

  );
}

export default App;

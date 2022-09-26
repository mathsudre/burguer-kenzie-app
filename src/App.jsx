import './App.css';
import 'animate.css';
import api from './services/api.js'
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartSection from './components/CartSection';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';

function App(){

  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);
 

  useEffect(() => {
    api.get('/products').then(response => {
      setTimeout(() => { setProducts(response.data)
        setFilteredProducts(response.data)
       }, 1500)
      return response.data
    })  
    
  },[])


  return (
    <div className="App">
      
      <Header products={products} setFilteredProducts={setFilteredProducts} />
      
      <main className='container'>

        <ProductList         
        setCurrentSale={setCurrentSale} 
        currentSale={currentSale}
        filteredProducts={filteredProducts} 
        />

        <CartSection currentSale={currentSale} setCurrentSale={setCurrentSale}/>
        
      </main>
      <Toaster
      position="bottom-right"
      reverseOrder={false}/>
    </div>
  );
}

export default App;

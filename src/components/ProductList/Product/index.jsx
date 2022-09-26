import './styles.css';
import { motion } from 'framer-motion';


function Product({product,setCurrentSale}){
  

    return (
        <motion.li 
        layout       
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 1 }}  
        className='productCard'>           
            <img src={product.img} alt={product.name}/>
            <section className='productDescription'>
                <h4>{product.name}</h4>
                <span>{product.category}</span>
                <p> R$ {product.price.toFixed(2)}</p>
                <button type='button' onClick={()=> setCurrentSale(product)} >Adicionar</button>
            </section>
        </motion.li>
    )
}

export default Product;
import './styles.css';
import { motion}  from 'framer-motion';
import { FcFullTrash } from 'react-icons/fc';

function CartItem ({item,removeFood}){
    
    return (        
       
            <motion.li 
            layout          
            className='cartItem'>
                <img src={item.img} alt={item.name}/>
                <section className='cartItemDescription'>

                    <div className='description'>
                    <h4>{item.name}</h4>
                    <span>{item.category}</span>                  
                    </div>
                   
                    <FcFullTrash className='removeIcon' onClick={()=> removeFood(item)}/> 
                </section>
            </motion.li>
    )
}

export default CartItem;


import './styles.css'
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import Product from './Product';
import FlatList from 'flatlist-react';
import lottie from 'lottie-web';



function ProductList({currentSale,setCurrentSale,filteredProducts}){
   
    const container = useRef(null);
    useEffect(()=>{
            lottie.loadAnimation({
            container:container.current, 
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/img/walkerBurger.json')
        });
        return () => lottie.destroy()        
    },[])

    const notifyError = () => {toast.error('Produto já está no carrinho!',
    {style: {
    borderRadius: '8px',
    background: 'var(--negative)',
    color: '#fff',
      },
    }
   )}

   const notifySucess = () => {toast.success('Adicionado no carrinho!',
   {style: {
   borderRadius: '8px',
   background: 'var(--color-primary)',
   color: 'var(--gray-0)',
     },
   }
  )}  


    function buyItem(item){
        const repeatedItem = currentSale.find(product => product.id === item.id)
        if(repeatedItem){
            notifyError()
        }else{
            setCurrentSale(prevState => [...prevState, item])     
            notifySucess()              
        }
       
    }

    const renderLottie = filteredProducts.length === 0 ? "" : "remove" 

    return (            
       <motion.ul layout className='productList'>
                <FlatList 
            list={filteredProducts}
            renderItem={(product,index) => <Product product={product} key={index} 
            setCurrentSale={buyItem}/>}
            renderWhenEmpty={() => <></>}
                /> 
                <div ref={container} className={`loadingList ${renderLottie}`}></div> 
        </motion.ul> 
    )
}

export default ProductList;
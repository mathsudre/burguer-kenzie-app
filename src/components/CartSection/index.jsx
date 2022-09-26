import './styles.css';
import lottie from "lottie-web";
import { useEffect, useRef} from "react";
import toast from 'react-hot-toast';
import CartItem from './CartItem';
import FlatList from 'flatlist-react';


function CartSection({currentSale,setCurrentSale}){

    const notify = (message) => {toast.success(`${message}`,
   {style: {
   borderRadius: '8px',
   background: 'var(--color-primary)',
   color: 'var(--gray-0)',
     },
   }
   )} 
  
    function removeFood(food){
    const newCar = currentSale.filter(item => item.id !== food.id)
    setCurrentSale(newCar)
    notify('Removido do carrinho!')
    }


    const container = useRef(null);
    useEffect(()=>{
            lottie.loadAnimation({
            container:container.current, 
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/img/cartEmpty.json')
        });
        return () => lottie.destroy()        
    },[])

    const totalBalance = currentSale.reduce((acc,item)=>acc+item.price,0)
    const renderLottie = totalBalance !== 0 ? "remove" : ""

    return (
        <aside className='carSection'>

            <h4> Carrinho de compras</h4>

            <div className='cartContainer'>

                <ul className='listProducts'>

                <FlatList 
            list={currentSale}
            renderItem={(item,index) => <CartItem item={item} key={index} removeFood={removeFood}/>}
            renderWhenEmpty={() => <></>}
            /> 
                 <div ref={container} className={`carEmpty ${renderLottie}`}>                   
                </div>

                </ul>

               {totalBalance > 0 && <section>
                    <p>Total: <span className='priceTag'>R$ {totalBalance.toFixed(2)}</span> </p>
                    <button type="button" onClick={()=> {
                         setCurrentSale([])
                         notify('Removidos com sucesso!')
                    }}>Remover Todos</button>
                </section>}
            </div>

        

            
        </aside> 
    )
}

export default CartSection;
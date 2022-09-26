import './styles.css'
import {useEffect, useRef} from 'react'
import lottie from "lottie-web";

function SearchBar({handleSearch}){      

    const container = useRef(null);
    useEffect(()=>{
            lottie.loadAnimation({
            container:container.current, 
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../assets/img/lupa.json')
        });
        return () => lottie.destroy()        
    },[])


    return (
        <section className='searchBar'>
        <input 
        type="text" 
        id="search" 
        placeholder='Digitar Pesquisa...'
        onChange={(e)=>handleSearch(e)}
        />
        <button type='button' ref={container}></button>       
        </section>
    )
}

export default SearchBar
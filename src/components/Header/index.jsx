import './styles.css'
import SearchBar from './SearchBar'
import {ReactComponent as LogoBurger} from '../../assets/img/LogoBurger.svg'



function Header({products,setFilteredProducts}){

   
    function handleSearch(e){
        const search = new RegExp(e.target.value, 'i')
        const filtered = products.filter(product => search.test(product.name + product.category));
        setFilteredProducts(filtered);
    }

    return(
        <header className="burguerHeader">

            <LogoBurger className="logoBurger"/>
            
            <SearchBar handleSearch={handleSearch}/>   
           
        </header>
    )
}

export default Header;
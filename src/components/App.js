import Navbar from "./navbar"
import Search from "./search"
import Products from "./products"
import About from "./About"
import Footer from "./Footer"
 
function App(){
    return(<div>
        <Navbar></Navbar>
        <Search></Search>
        <Products></Products>
        <About></About>
        <Footer></Footer>
    </div>)
}
export default App
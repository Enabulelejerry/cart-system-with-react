import CartContainer from "./components/CartContainer/CartContainer";
import Navbar from "./components/navbar/navbar";
import "./components/CartContainer/cart.css"
import { useGlobalContext } from "./context";

function App() {
  const {loading} = useGlobalContext();
  
  if(loading){
    return(
        <h1 className="loading">LOADING........</h1>
    )
}


  return (
      <main>
        <Navbar />
        <CartContainer />
      </main>
       
   
  );
}

export default App;

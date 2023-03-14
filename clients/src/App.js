import './App.css';
import Routing from './Routing';
import { ShoppingCartProvider } from './context/shopping';
// import { ShopContext } from './context/shopping';
function App() {
  return (
    <ShoppingCartProvider>
      <Routing/>
    </ShoppingCartProvider>
    
  );
}

export default App;
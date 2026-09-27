import CartProvider from './context/CartProvider';
import Catalog from './components/Catalog/Catalog';

import './App.css';

function App() {
    return (
        <CartProvider>
            <Catalog />
        </CartProvider>
    );
}

export default App;
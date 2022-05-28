
import ItemsList from "./components/temp/ItemsList"
import './App.css';
import CustomersList from './components/temp/CustomersList';
import ProductCard from './components/temp/ProductCard';
import ProductsList from "./components/temp/ProductsList";

function App() {
  return (
    <div className="App">
    <ItemsList />
    <CustomersList />
    <ProductsList />
    </div>
  );
}

export default App;
//todo-ortal add header and footer
//todo-ortal add spead dial actions: add customer, add order, add product
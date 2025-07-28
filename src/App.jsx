import './App.css'
import ProductList from './components/ProductList'

function App(){
  return ( //definir lo que se va a mostrar en pantalla
    <div className='App'>
      <h1>Tienda FrikieStore</h1>
      <ProductList />
    </div>
  );
}
export default App;

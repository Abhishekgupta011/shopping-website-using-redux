import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './Components/Pages/Header';
import ProductList from './Components/Product/ProductList';
import { useEffect } from 'react';
import Notification from './Components/UI/Notification';
import { fetchData, sentCartData } from './Components/Store/Cart-Actions';


function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.notification.notification);

  //let isInitial = true;
 useEffect(()=>{

    // Fetch cart data from the server after the component mounts
    dispatch(fetchData());

 },[dispatch])
  useEffect(() => {
    // This block will run only after the initial render
    // if (isInitial) {
    //   isInitial = false;
    //   console.log('Initial Render');
    //   return;
    // }
    if(cart.changed){
      if(cart.totalAmount>0){
        // // This block will run after the initial render
      // console.log('Executing after initial render');
      dispatch(sentCartData(cart));
      //dispatch(fetchData())
      console.log("22222222222")
      }
    }
    
    

  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && <Notification 
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;

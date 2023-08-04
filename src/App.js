import './App.css';
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';
import LeftPanel from './components/LeftPanel';
import { useState } from 'react';
import UpdateProduct from './components/UpdateProduct';
import MyProducts from './components/myProducts';
import Orders from './components/orders';
import AddProductFromExcel from './components/AddProductFormExcel';
import Returns from './components/returns';



import Login from './dir/login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  const [page, setPage] = useState('#')
  return (
    <div className="App">

      {isLoggedIn ?
        <>
          <LeftPanel setpage={setPage} />
          <div style={{ width: "100%", padding: "1%" }}>

            {page === '#' && <h1 className='d-flex bg-light mx-5  h-50 headerone'>welcome to our admin panel please choose what to do from the side panel.</h1>}
            {page === 'my Products' && <MyProducts />}
            {page === 'Add Product' && <AddProduct />}
            {page === 'Add Product from excel' && <AddProductFromExcel />}
            {page === 'Delete Product' && <DeleteProduct />}
            {page === 'Update Product' && <UpdateProduct />}
            {page === 'Orders' && <Orders/>}
            {page === 'Returns' && <Returns/>}
            {page === 'Logout' && <h1 className='d-flex bg-light mx-5  h-50 headerone'>welcome to our admin panel please choose what to do from the side panel.</h1>}
          </div>
        </> :
        <Login onLogin={handleLogin} />
      }


    </div>
  );
}

export default App;

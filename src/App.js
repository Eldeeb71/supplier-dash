import './App.css';
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';
import LeftPanel from './components/LeftPanel';
import { useState } from 'react';
import UpdateProduct from './components/UpdateProduct';
import MyProducts from './components/myProducts';




import Login from './dir/login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  

  const [page, setPage] = useState('#')
  return (
    <div className="App">

{isLoggedIn ? ( // If logged in, show the content
        <div>
          <LeftPanel setpage={setPage} />
      <div style={{ width: "100%", padding: "1%" }}>
        
        {page === '#' && <h1 className='d-flex bg-light mx-5  h-50 headerone'>welcome to our admin panel please choose what to do from the side panel.</h1>}
        {page === 'my Products' && <MyProducts />}
        {page === 'Add Product' && <AddProduct />}
        {page === 'Delete Product' && <DeleteProduct />}
        {page === 'Update Product' && <UpdateProduct />}
        {page === 'Orders' && <h1 className='d-flex bg-light mx-5  h-50 headerone'>welcome to our admin panel please choose what to do from the side panel.</h1>}
        {page === 'Logout' && <h1 className='d-flex bg-light mx-5  h-50 headerone'>welcome to our admin panel please choose what to do from the side panel.</h1>}
      </div>
          </div>
        
      ) : ( // If not logged in, show a login form or redirect to a login page
        <Login onLogin={handleLogin}/>
      )}

      
    </div>
  );
}

export default App;

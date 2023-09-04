
import React, { createContext } from 'react';
import './App.css';
import ContextCon from './component/ContextComp';
// import Data from './component/Data';
// import NewProduct from './component/NewProduct';
// import Time from './component/Time';
// import Product from './component/Product';

export const Usercontext = React.createContext()

function App() {
 
  const datas = {
    "name":"hariharan",
    "rollNO":195875,
    "college":'bannari'
  }
  return (
    <>
    <div>hellowhari</div>
    <Usercontext.Provider value={datas}>
      <ContextCon/>
    </Usercontext.Provider>
    
    </>
    
  );
}

export default App;

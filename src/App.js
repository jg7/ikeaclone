import React from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Products from './components/product_list'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

function App() {
  return (
    <div className="container">
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;

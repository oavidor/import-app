
import * as React from 'react';
import {  Routes, Route } from "react-router-dom";
import ItemsList from "./components/temp/ItemsList"
import './App.css';
import CustomersList from './components/temp/CustomersList';
import ProductsList from "./components/temp/ProductsList";
import Layout from './components/layout/Layout';
import CustomerForm from './components/temp/CustomerForm';


function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route index element={<ItemsList />} />
        <Route path="customers" element={<CustomersList />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="customer" element={<CustomerForm />} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
//todo-ortal add header and footer
//todo-ortal add spead dial actions: add customer, add order, add product
   // <div className="App">
    // <ItemsList />
    // <CustomersList />
    // <ProductsList />
    // </div>
  //   <Route path="*" element={<ItemsList />}>
  //   <Route path="customers" element={<CustomersList />} />
  //   <Route path="products" element={<ProductsList />} />
  //   <Route index element={<ItemsList />} />
  //   {/* <Route path="*" element={<NoPage />} /> */}
  // </Route>
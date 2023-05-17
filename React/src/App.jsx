import { useState, useEffect } from 'react';
import './App.css';
import Layout from './Layout';
import Create from './Create';
import Card from './Card';
import { userData } from "./api/Session";



function App() {

  
   return (
    <Layout>
      <div>Welcome <a>{userData.username}</a></div>
      
    </Layout>
  );
}

export default App;

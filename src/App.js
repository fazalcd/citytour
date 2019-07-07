import React from 'react';

import Navbar from  "./components/Navbar/Navbar";
import Tourlist from "./components/tourlist";
import './App.scss';


function App() {
  return( 
  <main> 
  <Navbar/>
  <Tourlist/>
  </main>
  );
}

export default App;

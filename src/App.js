import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  // get date
  const date_now = new Date().getFullYear(); 

  return (
    <Fragment>

      <Header 
        title = 'Productos Le Troupe'
      />

      <Footer 
        date_now = {date_now}
      />

    </Fragment>
  );
}

export default App;

import Datatable from 'components/datatable';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">

        <h1 className="text-primary">Olá mundo!</h1>
        <Datatable/>

      </div>
      <Footer/>
    </>
  );
}

export default App;

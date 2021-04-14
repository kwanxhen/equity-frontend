import React from "react";

//Importing components
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron';
import Jumbotron2 from '../components/Jumbotron2';
import Jumbotron3 from '../components/Jumbotron3';
import Jumbotron4 from '../components/Jumbotron4';
import Jumbotron5 from '../components/Jumbotron5';

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Jumbotron />
      <Jumbotron2 />
      <Jumbotron3 />
      <Jumbotron4 />
      <Jumbotron5 />
    </React.Fragment>
  );
}

export default Home;

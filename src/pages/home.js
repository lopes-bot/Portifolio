import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import Profile from '../components/Profile';
import Resume from '../components/Resume';
import Portifolio from  '../components/Portifolio';
import Footer from '../components/Footer';

function Home() {
  
  return (<> 
    <Header />
    <Post />
    <Profile />
    <Resume />
    <Portifolio />
    <Footer />
  </>
  );
}

export default Home;
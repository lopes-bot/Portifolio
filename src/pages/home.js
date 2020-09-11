import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import Profile from '../components/Profile';
import Resume from '../components/Resume';
import Portifolio from  '../components/Portifolio';

function Home() {
  
  return (<> 
    <Header />
    <Post />
    <Profile />
    <Resume />
    <Portifolio />
  </>
  );
}

export default Home;
import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import Profile from '../components/Profile';
import Resume from '../components/Resume';

function Home() {
  
  return (<> 
    <Header />
    <Post />
    <Profile />
    <Resume />
  </>
  );
}

export default Home;
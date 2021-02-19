import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import {URL} from './URL'
import Title from './Title'
import Characters from './Characters'

const App = () => {
  const [post, setPost] = useState([])
  const [currentCharId, setCurrentCharId] = useState('1')

  const openDetails = id => {
    setCurrentCharId(id)
  };

  const closeDetails = () => {
    setCurrentCharId(null)
  };

  useEffect(() => {
    const fetchData = () => {
      axios
      .get(`${URL}`)
      .then(res =>{
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
    fetchData();
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      
      <Title post={post}/>
        {
          post.map(ch => {
            return <Characters key={ch.id} post={ch} action={openDetails} charId={currentCharId} close={closeDetails}/>
          })
        }
        {/* {
          currentCharId && <Details charId={currentCharId} close={closeDetails} />
        } */}
      
    </div>
  );
}

export default App;

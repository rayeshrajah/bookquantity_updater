import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Book from './component/Book';

import './App.css';



function App() {
  const [state, setState] = useState({
    books: [],
  })
  
  const { books } = state;
  
  useEffect(() => {
    const bookApi = axios.get('http://localhost:3000/api/book')
  
    Promise.all([bookApi]).then((all) => {
      setState({books: all[0].data})
    })
  }, [books])
  return (
    <Book bookApi={books}/>
  );
}

export default App;

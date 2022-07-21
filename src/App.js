import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Book from './components/Book'
import BookList from './components/BookList';

function App() {

  //state
  const [bookLists, setBookLists] = useState([])

  //fetch top 5 books of each genre from NYtimes
  const getBookLists = async () => {
    try {
      const result = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`)
      console.log(result.data.results.lists)
      setBookLists(result.data.results.lists)
    } catch (error) {
      console.log('something went wrong with call to nytimes' + error)
    }
  }

  useEffect(() => {
    // get top 5 books from each genre
    getBookLists()
  }, [])

  return (
    <div className="App">
      {bookLists.slice(0, 8).map((genre, index) => (
         <BookList listOfBooks={genre.books} />
      ))}
    </div>
  );
}

export default App;

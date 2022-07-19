import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Book from './components/Book'

function App() {

  //state
  const [books, setBooks] = useState([])

  // function to get Books from NYTimes and SetState
  const getBooks = async () => {
    try {
      const result = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`)
      setBooks(result.data.results.books)
    } catch (error) {
      console.log('something went wrong with call to nytimes' + error)
    }
  }

  useEffect(() => {
    //getBooks
    getBooks()
  }, [])

  return (
    <div className="App">
      <section className='books-container'>
        {books.slice(0,5).map((book, index) => (
          <Book author={book.author}
            title={book.title}
            coverImageURL={book.book_image}
            wksOnList={book.weeks_on_list}
            description={book.description}
            key={book.primary_isbn10}
            links={book.buy_links} />
        ))}
       
      </section>

    </div>
  );
}

export default App;

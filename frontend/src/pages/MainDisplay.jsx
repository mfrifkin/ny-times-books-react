import '../styles/MainDisplay.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Book from '../components/Book'
import BookList from '../components/BookList';
import Header from '../components/Header';
import Title from '../components/Title';
import Navbar from '../components/Navbar';
function MainDisplay() {

  //state
  const [bookLists, setBookLists] = useState([])

  //fetch top 5 books of each genre from NYtimes
  const getBookLists = async () => {
    try {
      const result = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`)
      setBookLists(result.data.results.lists)
    } catch (error) {
      console.log('something went wrong with call to nytimes' + error)
    }
  }

  const getReviews = async ()=>{
    const response = await axios.get('/api/reviews/')
    console.log(response)
  } 

  useEffect(() => {
    // get top 5 books from each genre
    getBookLists()
    getReviews()
  }, [])

  return (
    <div>
      <Title 
        title={'The New York Times Best Sellers'} 
        showSubHeading={true} 
        subheading={'Authoritatively ranked lists of books sold in the United States, sorted by format and genre'}
      />
      <a href="/auth/google">login</a>
      <Navbar/>
      {bookLists.slice(0, 8).map((genre, index) => (
         <BookList listOfBooks={genre.books} 
                   genreHeading={genre.list_name}
                   genreEncoded={genre.list_name_encoded}
                   key={index}
         />
      ))}
    </div>
  );
}

export default MainDisplay;

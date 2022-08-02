import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Book from '../components/Book'
import Xbook from '../components/Xbook'
import BookList from '../components/BookList'
import Title from '../components/Title'
import { useLocation } from 'react-router-dom'

const SingleGenreDisplay = () => {
    const [bookList, setBookList] = useState([])
    const { genre } = useParams();
    const location = useLocation()
    console.log(location.state)

    const getBookList = async (genre) => {
        try {
            console.log(`https://api.nytimes.com/svc/books/v3/lists/current/${genre}.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`)
            const result = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${genre}.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`)
            console.log(result.data.results.books)
            setBookList(result.data.results.books)
        } catch (error) {
            console.log('something went wrong with call to nytimes' + error)
        }
    }


    useEffect(() => {
        // get top 5 books from each genre
        getBookList(genre)

    }, [])

    return (
        <div>
            <Title title={location.state.title.replace('and','&')} showSubHeading={false}/>
            <div style={{ counterReset: 'book-rank' }}>

                {bookList.map((book, index) => (
                    <Xbook author={book.author}
                        title={book.title}
                        coverImageURL={book.book_image}
                        wksOnList={book.weeks_on_list}
                        description={book.description}
                        key={book.primary_isbn10}
                        links={book.buy_links} />
                ))}
            </div>

        </div>
    )
}

export default SingleGenreDisplay
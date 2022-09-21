import '../styles/BookList.css'
import Book from './Book'
import { Link } from 'react-router-dom'

const BookList = ({ listOfBooks, genreHeading, genreEncoded }) => {
    return (
        <section className='books-section'>
            <Link className='genre-link' to={genreEncoded} state={{title:genreHeading}}>
                <h4 className='genre-heading'>{genreHeading.replace('and', '&')}</h4>
            </Link>
            <div className='books-container snaps-inline'>
                {listOfBooks.map((book, index) => (
                    <Book author={book.author}
                        title={book.title}
                        coverImageURL={book.book_image}
                        wksOnList={book.weeks_on_list}
                        description={book.description}
                        key={book.primary_isbn10}
                        links={book.buy_links} 
                        isbn={book.primary_isbn10}/>
                        
                ))}
            </div>
            <p className='purchase-text'>When you purchase an independently ranked book through our site, we earn an affiliate commission.</p>
        </section>
    )
}

export default BookList
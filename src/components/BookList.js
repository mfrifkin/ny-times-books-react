import '../styles/BookList.css'
import Book from './Book'

const BookList = ({ listOfBooks }) => {
    return (

        <section className='books-container snaps-inline'>
            {listOfBooks.slice(0, 5).map((book, index) => (
                <Book author={book.author}
                    title={book.title}
                    coverImageURL={book.book_image}
                    wksOnList={book.weeks_on_list}
                    description={book.description}
                    key={book.primary_isbn10}
                    links={book.buy_links} />
            ))}

        </section>
    )
}

export default BookList
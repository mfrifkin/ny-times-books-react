import '../styles/BookList.css'
import Book from './Book'
import { Link } from 'react-router-dom'
import useDraggableScroll from 'use-draggable-scroll';
import { useRef
 } from 'react';
const BookList = ({ listOfBooks, genreHeading, genreEncoded }) => {

    const ref = useRef(null);
    const { onMouseDown } = useDraggableScroll(ref,{ direction: 'horizontal' });

    return (
        <section className='books-section'>
            <Link className='genre-link' to={genreEncoded} state={{title:genreHeading}}>
                <h4 className='genre-heading'>{genreHeading.replace('and', '&')}</h4>
            </Link>
            <div ref={ref} onMouseDown={onMouseDown} className='books-container'>
                {listOfBooks.map((book, index) => (
                    <Book author={book.author}
                        title={book.title}
                        coverImageURL={book.book_image}
                        wksOnList={book.weeks_on_list}
                        description={book.description}
                        key={book.primary_isbn10}
                        links={book.buy_links} />
                ))}
            </div>
            {/* <p className='purchase-text'>When you purchase an independently ranked book through our site, we earn an affiliate commission.</p> */}
        </section>
    )
}

export default BookList
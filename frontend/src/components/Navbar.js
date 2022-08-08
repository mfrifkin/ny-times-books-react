import '../styles/Navbar.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react';
const Navbar = () => {
    const [count, setCount]= useState(0)
    const navigate = useNavigate();
    const changeMe = (value, event) => {
        const index = event.nativeEvent.target.selectedIndex;
        const title = event.nativeEvent.target[index].text;
        navigate(`/${value}`, { state: { title: title } })
        event.nativeEvent.target.selectedIndex = 0;

    }

    return (
        <div className='nav-container'>
         
                <select className='nav-select' onChange={(event) => changeMe(event.target.value, event)} style={{ width: '70px' }}>
                    <option value="FICTION"> FICTION</option>
                    <option  value="combined-print-and-e-book-fiction">Combined Print and E-Book Fiction</option>
                    <option value="hardcover-fiction">Hardcover Fiction</option>
                    <option value="trade-fiction-paperback">Trade Fiction Paperback</option>
                </select>
            
            <select className='nav-select' onChange={(event) => changeMe(event.target.value, event)} >
                <option value="FICTION"> NONFICTION</option>
                <option value="combined-print-and-e-book-nonfiction">Combined Print and E-Book Nonfiction</option>
                <option value="hardcover-nonfiction">Hardcover Nonfiction</option>
                <option value="paperback-nonfiction">Paperback Nonfiction</option>
            </select>
            <select className='nav-select' onChange={(event) => changeMe(event.target.value, event)} >
                <option value="FICTION"> CHILDREN'S</option>
                <option value="childrens-middle-grade-hardcover">Childrens Middle Grade Hardcover</option>
                <option value="picture-books">Children's Picture Books</option>
                <option value="series-books">Children's Series</option>
            </select>
        </div>
    )
}

export default Navbar
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import '../styles/Dropdown.css'

const DropDown = ({ links }) => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClickAway = () => {
        if (isOpen) {
            setIsOpen(false)

        }
    };

    // allows us to wrap dropdown in clickAwayListener only once its been opened
    const ConditionalWrapper = ({ condition, wrapper, children }) =>
        condition ? wrapper(children) : children;

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className='dropdown'>
                <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>BUY</button>
                <div className={isOpen ? 'dropdown-menu active' : 'dropdown-menu'}>
                    {links.map((link, index) => (
                        <a href={link.url} onClick={handleClickAway} rel="noreferrer" className='item' target="_blank">{link.name}</a>
                    ))}
                </div>
            </div>
        </ClickAwayListener>
    )
}

export default DropDown

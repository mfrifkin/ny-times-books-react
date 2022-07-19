import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import '../styles/Dropdown.css'
const DropDown = ({links}) => {

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
        <ConditionalWrapper condition={isOpen}
            wrapper={children => <ClickAwayListener onClickAway={handleClickAway}>{children}</ClickAwayListener>}>
            <div className="">
                <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>Buy</button>
                <div className={isOpen ? 'dropdown-menu active' : 'dropdown-menu'}>
                    <a href="https://www.youtube.com/watch?v=ZllOiG6FWas" target="_blank" onClick={() => setIsOpen(!isOpen)} >content</a>
                    {/* {links.map((link,index)=>(
                        <div href={link.url}>{link.name}</div>
                    ))} */}
                </div>
            </div>
        </ConditionalWrapper>

    )
}

export default DropDown

import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DropDown from './Dropdown'
const Header = () => {
const links = [{url:'auth/google',name:'login'},{url:'auth/logout',name:'logout'}]


  return (
    <div className='header-container'>
      <div className="account">
        <a href="/auth/google" className=''>Login |</a>
        <a href="/auth/logout" className=''> Logout</a>
      </div>
      <img className='ny-times-logo' src="https://i.ibb.co/3MjPCck/The-New-York-Times-logo.png" alt="The-New-York-Times-logo" border="0" />
    </div>
  )
}

export default Header
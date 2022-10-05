import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DropDown from './Dropdown'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Header = () => {
  const links = [{ url: 'auth/google', name: 'login' }, { url: 'auth/logout', name: 'logout' }]
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)

  const getUserStatus = async () => {
    const response = await axios.get('http://localhost:5000/auth/isloggedin')
    console.log(response.data)
    setUserIsLoggedIn(response.data.status)
   
  }
  useEffect(() => {
    getUserStatus()
  }, [])

  return (
    <div className='header-container'>
      <div className="account">
        {userIsLoggedIn?
        <a href="/auth/logout" className=''> Logout</a>: 
        <a href="/auth/google" className=''>Login </a>}
      </div>
      <Link  to='/'>
        <img className='ny-times-logo' src="https://i.ibb.co/3MjPCck/The-New-York-Times-logo.png" alt="The-New-York-Times-logo" border="0" />
      </Link>
    </div>
  )
}

export default Header
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice'


function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm 
        sm:text-xl font-semibold dark:text-white  '>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 rounded-xl text-white
         ' >Asad's</span>
        blog
      </Link>
      <form>
        <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch}
          className='hidden lg:inline'></TextInput>
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-3 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray'
          onClick={() => dispatch(toggleTheme())} pill >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </Button>
        {currentUser ? (
          <Dropdown arrowIcon={false} inline
            label={<Avatar alt='User' img={currentUser.profilePicture} rounded />}
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm truncate font-medium'>{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />

            <Dropdown.Item>Sign Out</Dropdown.Item>


          </Dropdown>
        ) :
          (<Link to='/SignIn'>
            <Button gradientDuoTone='purpleToBlue' outline>
              SignIn</Button></Link>)
        }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/About"} as={"div"}>
          <Link to='/About'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/Projects"} as={"div"}>
          <Link to='/Projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
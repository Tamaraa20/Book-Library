import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import '../Header/Header.css'

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>

        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>Find books with just one search</h2><br />
          <p className='header-text fs-18 fw-3'>
            Search our library for your perfect book match. Simply enter your preferences,
            such as genre, author, or theme, and let our search engine do the rest.
            Find your next book in seconds!</p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header
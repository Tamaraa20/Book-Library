import React from 'react'
import Header from '../../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import BookList from '../../Components/BookList/BookList'

const Home = () => {
  return (
    <main>
        <Header/>   
        <BookList /> 
        <Outlet/>
    </main>
  )
}

export default Home
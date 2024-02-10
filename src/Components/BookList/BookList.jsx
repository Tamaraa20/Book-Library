import React from 'react'
import { useGlobalContext } from '../../contextDb'
import Loading from '../Loader/Loader'
import coverImg from '../../Images/cover_not_found.jpg'
import './Booklist.css'
import Book from './Book'

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  const bookWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      coverImg: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });


  if (loading)
    return <Loading />;

  return (
    <div>
      <section className='booklist'>
        <div className="container">
          <div className="section-title">
            <h2>{resultTitle}</h2>
          </div>
          <div className='booklist-content grid'>
            {
              bookWithCovers.slice(0, 30).map((item, index) => {
                return (
                  <Book key={index} {...item}>
                  </Book>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default BookList
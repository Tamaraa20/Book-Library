import React from 'react';
import { useGlobalContext } from '../../contextDb';
import Book from '../BookList/Book';
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import  '../Favorite/Favorite.css'

const Favorite = () => {
    const { favorites } = useGlobalContext();
    const navigate = useNavigate()

    return (
      <div className='fav'>     
        <section className='booklist'>
          <div className="container">
            <div className="section-title">
              <h2>Favorite Books</h2>
            </div>
            <div className='booklist-content grid'>
              {favorites.map((favorite, index) => (
                <Book key={index} {...favorite} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };
  
export default Favorite;
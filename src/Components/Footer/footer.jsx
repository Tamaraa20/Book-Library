import React from 'react';
import { FaFacebook } from "react-icons/fa";
import './footer.css'; // Import your CSS file for styling
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  
    return (
        <footer class="footer-basic">
            <div class="social">
                <a href="#"> <FaFacebook icon={FaFacebook} /></a>
                <a href="#"> <FaInstagram icon={FaInstagram} /></a>
                <a href="#"> <FaLinkedin icon={FaLinkedin} /></a>
            </div>
            <div >
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="/" >Home</a></li>
                    <li class="list-inline-item"><a href="/about">About</a></li>
                    <li class="list-inline-item"><a href="/favorite">Favorite</a></li>
                </ul>
            </div>
            <p class="copyright">BookSearcher © 2024</p>
            
        </footer >
       

       
        
    );
};

export default Footer;

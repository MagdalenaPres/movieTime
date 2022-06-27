import React from "react";
import { NavLink } from 'react-router-dom';
import '../../Assets/Styles/successInfo.css';

export default function SuccessInformation() 
{
    return (
     <section className="ticket-info">
        <div className="success-info">
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="#758BFD" className="bi bi-check-circle" viewBox="0 0 16 16" id="confirm-sign">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </svg>
            <p className="email-sent">Success! We have send you tickets on you email address</p>
            <div className="main-page-btn">
                <NavLink className="main-page-button" to={'/'}>Go to main page</NavLink>
            </div>
        </div>
     </section>
    );
}
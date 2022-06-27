import React, { useState } from "react";
import Calendar from "react-calendar";
import '../../Assets/Styles/calendar.css';
import '../../Assets/Styles/onScreen.css';
import '../../Assets/Styles/movieCard.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useEffect } from "react";
import axios from "axios";
import Moment from 'moment';
import { NavLink } from 'react-router-dom';

const screensURL = 'http://localhost:8080/screen?day='

export default function OnScreen() 
{
    const [date, setDate] = useState(new Date())
    const [movies, setMovies] = useState([]);
    const [refactoredDate, setRefactoredDate] = useState(Moment(date).format('DD.MM.yyyy'))

    const setNewData = (d) => {
      setDate(d)
      setRefactoredDate(Moment(d).format('DD.MM.yyyy'))

      axios.get(screensURL+Moment(d).format('DD.MM.yyyy')).then((response) => {
        setMovies(response.data);
      });
    };

    useEffect(() => {
      Moment.locale('en');
      setRefactoredDate(Moment(date).format('DD.MM.yyyy'))

      axios.get(screensURL+refactoredDate)
      .then((response) => {
        setMovies(response.data);
      });
    }, []);

    return (
     <section className="on-screen">
        <div className="calendar">
            <Popup trigger={<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg>} position="bottom center" id="date-picker">
                <div className="calendar-container">
                    <Calendar onChange={setNewData} value={date}/>
                </div>
            </Popup>
            <div className="date" id="picked-date">
                {date.toDateString()}
            </div>
        </div>
        {movies.length == 0 ? (
        <div className="no-movies-title">
          There are no movies for selected date
        </div>
        ) : (
        <div className="table-movies">
        <table className="movie-card">
            <tbody className="t-body">
              {movies.map((m) => (
                <tr key={m['data']['filmId']}>
                  <td className="movie_i">
                  <NavLink className="link" to={'/moviedetails/' + m['data']['filmId']}><img alt="film"  width="220px"  height="270px"  src={m['data']['poster']} className="movie__img"/></ NavLink>
                  </td>
                  <div className="movie__content">
                    <td className="movie__title">
                      <NavLink className="link" to={'/moviedetails/' + m['data']['filmId']}>{m['data']['name']}</ NavLink>
                    </td>
                    <td className="movie-card__info">{m['data']['category']}</td>
                    <td className="movie-card__hours">{m['hours'].map((h, index) => (
                    <td className="movie-card__hour">
                      <NavLink className="link" to={'/seat/'+m['data']['filmId']+"&"+m['id'][index]}>{h}</NavLink>
                    </td>
                    ))}</td>
                  </div> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
     </section>
    );
}
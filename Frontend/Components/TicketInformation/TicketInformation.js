import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import '../../Assets/Styles/bookingTicket.scss';
import useToken from "../../Components/useToken";

const filmURL = 'http://localhost:8080/film/'
const screenURL = 'http://localhost:8080/screen/'
const placeURL = 'http://localhost:8080/takenplace'
const ticketURL = 'http://localhost:8080/ticket'

export default function TicketInformation() 
{
    const [movieInfo, setMovieInfo] = useState([]);
    const [screenInfo, setScreenInfo] = useState([]);
    const [placeInfo, setPlaceInfo] = useState([]);
    const [hallId, setHallId] = useState([]);
    const { token } = useToken();

    useEffect(() => {
        const path = window.location.pathname.split("/")
        const path1 = path[2].split("&")

       axios.get(filmURL+path1[0])
           .then((response) => {
               setMovieInfo(response.data);
       });

       axios.get(screenURL+path1[1])
            .then((response) => {
                setScreenInfo(response.data);
                setHallId(response.data['hallFk'].hallId)
        });

        setPlaceInfo(path1[2].split(","));
    }, []);

    const handleTicketReservation = () =>{
        var sId = window.location.pathname.split("/")[2].split("&")[1];

        for (var i = 0; i < placeInfo.length; i++) {

            axios.post(placeURL, {
                placeId: placeInfo[i],
                screenId: sId
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });

            axios.post(ticketURL, {
                screenId: sId,
                filmId: movieInfo['filmId'],
                placeId: placeInfo[i],
                userId: token
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }

    return (
     <section className="ticket-info">
        <div className="container-ticketinfo">
            <div className="booking-movie">
                <p id="booking-header">Movie details:</p>
                <p id="booking-title">{movieInfo['name']}</p>
                <p id="booking-hour">{screenInfo['hour']}</p>
                <p id="booking-day">{screenInfo['day']}</p>
                <p id="booking-city">Wroclaw</p>
            </div>
            <div className="line-booking"></div>
            <div className="booking-seats">
                {placeInfo.length > 1 ? (
                <div>
                    <p id="seats-header">Your seats:</p>
                    {placeInfo.map((p) => (
                        <div>
                            <p>hall {hallId}, place {p}</p>
                        </div>
                    ))}
                </div>
                ) : (
                    <div>
                        <p>Your seat:</p>
                        <p>hall {hallId}, place {placeInfo[0]}</p>
                    </div>
                )}
            </div>
        </div>
        <div>
            <p id="booking-confirm">Do your confirm transaction?</p>
            <div className="container-ticketinfo">
                <NavLink className="booking-btn" onClick={handleTicketReservation} to={'/successinformation'}>Yes</NavLink>
                <NavLink className="booking-btn" to={'/'}>No</NavLink>
            </div>
        </div>
     </section>
    );
}
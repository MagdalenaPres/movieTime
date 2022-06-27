import useToken from "../../Components/useToken";
import { useEffect, useState} from "react";
import React from "react";
import '../../Assets/Styles/tickets.scss';
import axios from "axios";
import { NavLink } from 'react-router-dom';

export default function Tickets() 
{
    const ticketsURL = 'http://localhost:8080/myTickets/'
    const { token } = useToken();
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axios.get(ticketsURL+token)
        .then((response) => {
            setTickets(response.data);
        });
    }, []);

    return (
     <section className="tickets">
        {token != null ? (
        <div>
          {tickets.length > 0 ? (
            <div>
              {tickets.map((t) => (
                <div class="cardWrap">
                <div class="card cardLeft">
                  <p id="ticket-t">Movie<span>Time</span></p>
                  <div class="m-title">
                    <h2>{t.name}</h2>
                    <span>movie</span>
                  </div>
                  <div class="seat">
                  {t.places.map((p)=>(
                    <div>
                        <h2>place: {p}</h2>
                    </div>
                    ))}
                  </div>
                  <div class="time">
                    <h2>{t.screen.screenHour}</h2>
                    <span>time</span>
                  </div>
                  <div class="time">
                    <h2>{t.screen.screenDay}</h2>
                    <span>day</span>
                  </div>
                </div>
                <div class="card cardRight">
                  <div class="eye"></div>
                  <div class="number">
                    <h3>{t.places.map((p)=>(
                    <div>
                        {p}
                    </div>
                    ))}</h3>
                    <span>seat</span>
                  </div>
                  <div class="barcode"></div>
                </div>
            </div>
            ))}
            </div>
            ) : (
              <div id="non-tickets">
                <p>You don't have any tickets</p>
                <p><NavLink className="link" id="gotoonscreen" to={'/onscreen'}>Buy ticket</NavLink></p>
              </div>
          )}
        </div>
        ) : (
            window.location.href='/login' 
        )}
     </section>
    );
}
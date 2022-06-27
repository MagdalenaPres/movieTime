import { useEffect, useState} from "react";
import React from "react";
import axios from "axios";
import useToken from "../../Components/useToken";
import { NavLink } from 'react-router-dom';
import 'konva/lib/shapes/Rect';
import 'konva/lib/shapes/Circle';
import 'konva/lib/shapes/Text';
import { Stage,Layer} from "react-konva/lib/ReactKonvaCore";
import { Rect, Line} from 'react-konva';
import '../../Assets/Styles/seatSelection.scss';

const filmURL = 'http://localhost:8080/film/'
const screenURL = 'http://localhost:8080/screen/'
const coloredSeatsURL ='http://localhost:8080/coloredSeatsForScreen/'

export default function SeatsSelection() 
{
    const [movieInfo, setMovieInfo] = useState([]);
    const [screenInfo, setScreenInfo] = useState([]);
    const [places, setPlaces] = useState([]);
    const [chosenSeats, setChosenSeats] = useState([]);
    const { token } = useToken();

    useEffect(() => {
        const path = window.location.pathname.split("/")
        const path1 = path[2].split("&")

        axios.get(coloredSeatsURL+path1[1])
        .then((response) => {
            setPlaces(response.data[0]['hallId']['allPlaces']);
        });

       axios.get(filmURL+path1[0])
           .then((response) => {
               setMovieInfo(response.data);
       });

       axios.get(screenURL+path1[1])
            .then((response) => {
                setScreenInfo(response.data);
            })
    }, []);

    const handleColorChange = (e) => {
        var fill = e.target.fill();

        var id = e.target['attrs']['id'];

        if(fill == '#515372'){
        }
        else if(fill == 'white'){
            e.target.fill('#8172D5');
            fill = e.target.fill();
        }
        else{
            e.target.fill('white');
            fill = e.target.fill();
        }
        if(fill == '#8172D5'){
            setChosenSeats(oldArray => [...oldArray, id]);
        }
        if(fill == 'white'){
            setChosenSeats(chosenSeats.filter(item => item !== id));
        }
    };

    return(
        <section>
            {token != null ? (
            <div className="container">
                <div className="movie-info">
                    <p id="seats-title">{movieInfo['name']}</p>
                    <p id="seats-hour">{screenInfo['hour']}</p>
                    <p id="seats-day">{screenInfo['day']}</p>
                    <p id="seats-city">Wroclaw</p>
                </div>
                <div className="line"></div>
                <div className="seatsselection">
                    <p id="choose-seat-txt">Choose your seats</p>
                    <div className="konva-seats">
                        <Stage width='800' height='420' className="stage">
                         <Layer>
                         <Line
                            x={30}
                            y={5}
                            points={[0, 40, 370, 0, 740, 40]}
                            fillLinearGradientStartPoint={{ x: 370, y: 15 }}
                            fillLinearGradientEndPoint={{ x: 370, y: 7 }}
                            fillLinearGradientColorStops={[0, '#f5f5f5', 1, '#8172D5']}
                            closed
                            tension={0.8}
                            />
                            <Rect
                               key={1}
                               id={1}
                               x={50}
                               y={50}
                               width={25}
                               height={25}
                               stroke="#27187F"
                               innerRadius={20}
                               outerRadius={40}
                               fill={'white'}
                               opacity={0.8}
                               cornerRadius={[10, 10, 2, 2]}
                               onClick={handleColorChange}
                             />
                           {places.map((p) => (
                             <Rect
                               key={p.placeId}
                               id={p.placeId}
                               x={p.x}
                               y={p.y}
                               width={p.width}
                               height={p.height}
                               stroke="#27187F"
                               innerRadius={20}
                               outerRadius={40}
                               fill={p.color}
                               opacity={0.8}
                               cornerRadius={[10, 10, 2, 2]}
                               onClick={handleColorChange}
                             />
                           ))}
                         </Layer>
                        </Stage>
                    </div>
                </div>
                <div className="next-seats">
                {chosenSeats.length > 0 ? (
                    <NavLink className="link" id="b-next-seats" to={'/ticketbooking/'+movieInfo['filmId']+"&"+screenInfo['screenId']+"&"+chosenSeats}>Next</NavLink>
                ) : (
                    <p></p> 
                )}
                </div>
            </div> 
            ) : (
                window.location.href='/login' 
            )}
        </section>
    );
}
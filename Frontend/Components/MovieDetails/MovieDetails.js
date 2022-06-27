import { useEffect, useState} from "react";
import axios from "axios";
import '../../Assets/Styles/movieDetails.scss';
import YouTube from 'react-youtube';
import ReactModal from "react-modal";

const filmURL = 'http://localhost:8080/film/'

export default function MovieDetails() 
{
    const [movieInfo, setMovieInfo] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const path = window.location.pathname.split("/")

        axios.get(filmURL+path[2])
            .then((response) => {
                setMovieInfo(response.data);
        });
    }, []);

    function openModal() {
      setModalIsOpen(true);
    }

    function closeModal() {
      setModalIsOpen(false);
    }

    return(
        <section>
            <div id="card_container" data-offset="2">
              <div class="pg">
                <img src={movieInfo['poster']} />
              </div>
              <div id="card">
                <div class="shine"></div>
                <div class="text-block">
                  <h1>{movieInfo['name']}</h1>
                  <h3>{movieInfo['category']}</h3>
                  <p>{movieInfo['summary']}</p>
                  <button id="trailer-btn" onClick={openModal}>Watch Trailer</button>
                </div>
              </div>
            </div>
            <div className="modal-video">
              <ReactModal isOpen={modalIsOpen} ariaHideApp={true} id="modal-youtube" overlayClassName="overlay"
                style={{
                  content: {
                    width: '1000px',
                    height: '600px',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    justifyContent: 'center',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                  }
                }}>
                <YouTube
                  videoId={movieInfo['trailer']}                  
                  id="video"                     
                />
                <svg xmlns="http://www.w3.org/2000/svg" id="close-btn" onClick={closeModal} width="36" height="36" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </ReactModal>
            </div>
        </section>
    );
}
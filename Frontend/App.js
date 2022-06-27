import Home from './Components/Home/Home.js';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import LogIn from './Components/LogIn/LogIn.js';
import OnScreen from './Components/OnScreen/OnScreen.js';
import Register from './Components/Register/Register.js';
import WebsiteTitle from './Components/WebsiteTitle/WebsiteTitle.js';
import MovieDetails from './Components/MovieDetails/MovieDetails.js';
import SeatSelection from './Components/SeatSelection/SeatSelection.js';
import TicketInformation from './Components/TicketInformation/TicketInformation.js';
import SuccessInformation from './Components/SuccessInformation/SuccessInformation.js';
import Tickets from './Components/Tickets/Tickets.js';

function App() {
    return (
      <BrowserRouter>
      <div className="App">
        <p><WebsiteTitle /></p>
        <Navbar />
        <Routes>
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
          <Route path="/seat/:data" element={<SeatSelection />} />
          <Route path="/ticketbooking/:data" element={<TicketInformation />} />
          <Route path="/successinformation" element={<SuccessInformation />} />
          <Route path="/" element={<Home />} />
          <Route path="/onscreen" element={<OnScreen />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      </BrowserRouter>
    );
}

export default App;

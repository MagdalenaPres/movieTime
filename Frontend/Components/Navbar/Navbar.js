import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Assets/Styles/nav.css';
import useToken from "../../Components/useToken";
import active from '../../Assets/Styles/nav.css';

const Navbar = () =>
{
    const { token, removeToken } = useToken();

    const logout = () => {
        removeToken()
        window.location.reload(true)
    };

    return(
    <section className="navBar">
    <nav>
        <ul>
            <div className='nav-left'>
                <li className="nav-item">
                    <NavLink activeClassName={active} to="/" style={{ textDecoration: 'none', color: "#3A3749", float: 'left'}} >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName={active} to="/onscreen" style={{ textDecoration: 'none', color: "#3A3749", float: 'left'  }} >
                        On screen
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName={active} to="/tickets" style={{ textDecoration: 'none', color: "#3A3749", float: 'left'  }} >
                        Tickets
                    </NavLink>
                </li>
            </div>
            <div className="nav-right">
                <li className="nav-item">
                {token != null ? (
                        <button id="b-logout" onClickCapture={logout} >
                            Log out
                        </button>
                    ) : (
                    <NavLink activeClassName={active} to="/login" style={{ textDecoration: 'none', color: "#3A3749", float: 'right'}} >
                        Log in
                    </NavLink>
                     )}
                </li>
                {token != null ? (
                    <NavLink activeClassName={active} to="/register" style={{ textDecoration: 'none', color: "#3A3749" , float: 'right' }} >
                    </NavLink>
                ) : (
                    <li className="nav-item">
                    <NavLink activeClassName={active} to="/register" style={{ textDecoration: 'none', color: "#3A3749" , float: 'right' }} >
                        Register
                    </NavLink>
                </li>
                )}
            </div>
        </ul>
    </nav>                
    </section>
    );
    
}
export default Navbar;

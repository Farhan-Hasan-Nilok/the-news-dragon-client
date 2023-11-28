/* eslint-disable no-unused-vars */
import Marquee from "react-fast-marquee";
import logo from '../assets/logo.png'
import userImg from '../assets/user.png';
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../AuthContext/UserAuth";
const Header = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    // date related library 'moment.js'
    const newDate = new Date();
    const today = days[newDate.getDay()];
    const month = monthNames[newDate.getMonth()];
    const date = newDate.getDate();
    const year = newDate.getFullYear();
    const { user, logOut } = useContext(UserContext);
    const navigate = useNavigate();
    function goToLoginPage() {
        navigate('/other/login');
    }

    function handleLogout(){
        logOut()
        .then(() => console.log('log out'))
        .catch(err => console.log(err.message))
    }
    return (
        <div className='container-fluid'>

            {/* main header of the front page */}

            <div className='text-center mt-3'>
                <img src={logo} alt="" />
                <p className='text-gray title-font'>Journalist without fear or favour</p>
                <p className='text-gray time'><span className='font-color'>{today},{' '}</span>{`${month} ${date}, ${year}`}</p>
            </div>

            {/* breaking news section in the header */}

            <div className="d-flex bg-gray p-2">
                <button className='nav-btn'>Latest</button>
                {/* React Marquee library */}
                <Marquee speed={70} className="title-font" pauseOnHover={true}>
                    Match Highlights: Argentina vs Brazil (1  - 0) by Nicolás Otamendi 63&apos; (ARG) — as it happened   !   Match Highlights: Argentina vs Brazil (1 - 0) by Nicolás Otamendi 63&apos; (ARG) as...
                </Marquee>
            </div>

            {/* navbar  */}

            <div>
                <nav className="navbar navbar-expand-lg mt-1">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav mx-auto">
                                <NavLink className={`nav-link ${({ isActive }) => isActive ? 'active' : ''}`} to='/'>Home</NavLink>
                                <NavLink className={`nav-link ${({ isActive }) => isActive ? 'active' : ''}`} to='/other/about'>About</NavLink>
                                <NavLink className={`nav-link ${({ isActive }) => isActive ? 'active' : ''}`} to='/other/career'>Career</NavLink>
                            </div>
                            <div className="d-flex align-items-center">
                                {
                                    user?.photoURL ?
                                        <img className="profile mx-2" src={user.photoURL} alt="user-profile" />
                                        :
                                        <img className="profile mx-2" src={userImg} alt="user-profile" />
                                }
                                {
                                    user ?
                                        <button onClick={handleLogout} className="login-btn">Logout</button>
                                        :
                                        <button onClick={goToLoginPage} className="login-btn">Login</button>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
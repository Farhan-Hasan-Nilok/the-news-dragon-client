import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
    const [nav, setNav] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setNav(data))
            .catch(err => console.log(err.message))
    }, [])
    return (
        <div>
            <h5 className="fw-bold">All Category</h5>
            <div>
                {
                    nav.map(navItem => <NavLink to={`/category/${navItem.id}`} className={`left-nav d-block py-2 text-decoration-none ${({ isActive }) => isActive ? 'active' : ''}`} key={navItem.id}>{navItem.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNav;
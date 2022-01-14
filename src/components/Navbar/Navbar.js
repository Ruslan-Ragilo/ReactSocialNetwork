import h from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className={h.nav}>
            <div className={h.item}>
                <NavLink className={(navData) => navData.isActive ? h.activeLink : ''} to="/profile"><img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="Profile" title="Profile" /></NavLink>
            </div>
            <div className={h.item}>
                <NavLink className={(navData) => navData.isActive ? h.activeLink : ''} to="/dialogs" ><img src="https://cdn-icons-png.flaticon.com/512/1370/1370907.png" alt="Messges" title="Messages" /></NavLink>
            </div>
            <div className={h.item}>
                <NavLink className={(navData) => navData.isActive ? h.activeLink : ''} to="/news"><img src="https://cdn-icons-png.flaticon.com/512/2983/2983803.png" alt="News" title="News" /></NavLink>
            </div>
            <div className={h.item}>
                <NavLink className={(navData) => navData.isActive ? h.activeLink : ''} to="/music"><img src="https://cdn-icons-png.flaticon.com/512/651/651799.png" alt="Music" title="Music" /></NavLink>
            </div>
            <div className={h.item}>
                <NavLink className={(navData) => navData.isActive ? h.activeLink : ''} to="/settings"><img src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png" alt="Settings" title="Settings" /></NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
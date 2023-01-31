import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate()
    
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };

    const handleSignin = (e) => {
        e.preventDefault();
        navigate("/register")
    }

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/login");
    }
    const { user, loading, dispatch } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="navContainer">
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                <span className="logo">HUSTRAVEL</span>
            </Link>
            {user ? (
            <div className="navItems">
                <p>Xin chào {user.username}!</p>
                <button className="navButton" onClick={handleLogout}>Đăng phòng của bạn!</button>
                <button className="navButton" onClick={handleLogout}>Log out</button>
            </div>
            ) : (
                <div className="navItems">
                    <button className="navButton" onClick={handleSignin}>Register</button>
                    <button className="navButton" onClick={handleLogin}>Login</button>
                </div>
            )}
            </div>
        </div>
    )
}

export default Navbar